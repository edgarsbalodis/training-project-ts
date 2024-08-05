import {Router, Request, Response, NextFunction} from 'express';

interface RequestWithBody extends Request{
    body: { [key: string]: string| undefined }
}

function requiredAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    } else {
        res.status(403);
        res.send('Not Permitted');
    }
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
   res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" type="email"/>
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password"/>
            </div>
            <button>Submit</button>
        </form>
    `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    if (email && password && email === 'edgars@edgars.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    } else {
        res.send('Invalid email or password');
    }

});

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are logged in</div>
                <a href="/logout">logout</a>
            </div>
        `);
    } else {
        res.send(`
            <div>
                <div>You are not logged in</div>
                <a href="/login">login</a>
            </div>
        `);
    }
});

router.get('/logout', (req: Request, res: Response) => {
   req.session = undefined;
   res.redirect('/');
});

router.get('/protected', requiredAuth, (req: Request, res: Response) => {
   res.send('Welcome to protected route');
});

export { router };