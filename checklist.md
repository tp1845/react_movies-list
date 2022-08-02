1. [CODE KNOWLEDGE] - Don't use React fragment, if you already have a wrapper

BAD EXAMPLE:
```jsx
  <>
    <div className="movies">
      {cats.map(cat => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </div>
  </>
```

GOOD EXAMPLE:
```jsx
<div className="movies">
  {cats.map(cat => (
    <Cat key={cat.id} cat={cat} />
  ))}
</div>
```

ALSO GOOD EXAMPLE: 

```jsx
  <>
    {cats.map(cat => (
      <Cat key={cat.id} cat={cat} />
    ))}
  </>
```
2. [CODE KNOWLEDGE] - When you rendering a list, don't forget to add `key` prop

BAD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat cat={cat} />)}
</div>
```

GOOD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat key={cat.id} cat={cat} />)}
</div>
```

3. [CODE KNOWLEDGE] -  There is no need to specify the key in the child component.

BAD EXAMPLE:
```jsx
function ListItem(props) {
    <li key={props.key}>
      {props.value}
    </li>
  );
}

function NumberList(props) {
  const listItems = numbers.map((number) =>
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
```

GOOD EXAMPLE:
```jsx
function ListItem(props) {
    <li>
      {props.value}
    </li>
  );
}

function NumberList(props) {
  const listItems = numbers.map((number) =>
    <ListItem value={number} key={number.toString()}/>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
```
