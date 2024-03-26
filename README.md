# supermarket-graphql

# Table definitions

## Product

```
CREATE TABLE Product (
    Barcode INTEGER PRIMARY KEY,
    Name    TEXT    NOT NULL,
    Weight  NUMERIC
)
WITHOUT ROWID;
```
