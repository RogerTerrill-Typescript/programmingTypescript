"use strict";
function withEZDebug(Class) {
    return class extends Class {
        debug() {
            let Name = Class.constructor.name;
            let value = this.getDebugValue();
            return `Name(${JSON.stringify(value)})`;
        }
    };
}
class HardToDebugUser {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getDebugValue() {
        return {
            id: this.id,
            name: `${this.firstName} ${this.lastName}`,
        };
    }
}
let User = withEZDebug(HardToDebugUser);
let user = new User(3, 'Emma', 'Gluzman');
console.log(user.debug());
//# sourceMappingURL=mixins.js.map