import { View } from "./View";
import {User, UserProps} from "../models/User";

export class UserForm extends View<User, UserProps> {

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        };
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');

        if (input) {
            const name = input.value;
            this.model.set({ name });
        }

    }

    onSaveClick = (): void => {
        this.model.save();
    }

    template(): string {
        return `
            <div>
                <input />
                <button class="set-name">Update Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">Save</button>
            </div>
        `;
    }

}