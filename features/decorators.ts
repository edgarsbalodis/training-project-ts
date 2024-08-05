class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string  {
        return `This boat color is ${this.color}`;
    }

    @logError('boat was sunk in ocean')
    pilot(): void {
        throw new Error();
    }
}

interface OwnProp extends PropertyDescriptor {
    value?: () => void
}

function testDecorator(target: any, key: string) {
    console.log(key);
}

function logError(errorMessage: string)
{
    return function(target: any, key: string, desc: OwnProp): void {
        const method = desc.value;

        desc.value = function () {
            try {
                if (method) {
                    method();
                }
            } catch (e) {
                console.log(errorMessage)
            }
        }
    }
}