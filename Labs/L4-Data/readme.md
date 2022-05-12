# Food App - Data

- Install [json-server](https://github.com/typicode/json-server):

    ```
    npm i -g json-server
    ```

- Create a database file for json-server (db.json) in the root of the starter project:

    ```
    {
    "food": [
        { "id": 1, "name": "Butter Chicken", "price": 9, "calories": 1200 },
        { "id": 2, "name": "Curry Wurst", "price": 2.7, "calories": 730 },
        { "id": 3, "name": "Blini with Salmon", "price": 8.3, "calories": 600 }
    ]}
    ```

- Start json-server:

    ```
    json-server db.json
    ```

- Add food.service.ts, implement Create, Read, Update and Delete against the json-server api and use it in your app.

    ```
    ng g s food/food
    ```

- Don't forget to handle data change events

    ```typescript
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['modelclass']) {
        console.log('receiving updated modelclass:', changes['modelclass'].currentValue);
        }
    }
    ```

- If you want to generate the id manually you could use this code fragment:

    ```typescript
    const nextId = food.reduce((acc, f) => (acc = acc > f.id ? acc : f.id), 0) + 1;
    ```