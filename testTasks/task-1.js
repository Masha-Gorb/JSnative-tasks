class Person {
    constructor(obj) {
        this.name = obj.name;
        this.connections = [];
    }

    /**
     * Два человека равны равны, если равны имена.
     * Регистр букв обычно не должен учитываться.
     * @param {Person} other Другой человек, с которым сравнивать.
     */
    equals(other) {
        return this.name.toUpperCase() === other.name.toUpperCase();
    }

    /**
     * @returns {String} Строка приветствия.
     */
    introduce() {
        return `Меня зовут ${this.name}`;
    }
    /**
     * @returns {Array<Person>} Массив связанных с данным человеком людей.
     */
    getConnections() {
        return this.connections;
    }
    /**
     * В массивы связанных людей у двух экземпляров добавить другого человека.
     * @param {Person} other Другой человек, с которым нужно установитьь связь.
     * @returns {Person} Этот человек для создания цепочки методов добавления.
     */
    addConnection(other) {
        if (!this.connections.some(e => e.equals(other)))
            this.connections.push(other);

        if (!other.connections.some(e => e.equals(this)))
            other.connections.push(this);
        return this;
    }
}

var Ivan = new Person({ 'name': 'Иван Петров' });
var Petr = new Person({ 'name': 'Петр Иванов' });

console.log(Ivan.introduce());             // (string)                  "Меня зовут Иван Петров"
console.log(Ivan.getConnections());        // (Array of Persons)        []
console.log(Ivan.addConnection(Petr));     // (Person)                  ivan
console.log(Ivan.getConnections());        // (Array of Persons)        [Petr]
console.log(Petr.getConnections());        // (Array of Persons)        [Ivan]

function duplicator(arr) {
    return arr.concat(arr)
}

console.log(duplicator([2, 3, 5, 7]))