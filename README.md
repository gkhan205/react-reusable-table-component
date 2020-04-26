## Table Component

Usage:

```
import Table from '/components/Table';

<Table data={data} cols={tableConstants(handleEdit)} isDark hoverable striped bordered={false} />
```

Create a Table Constant which will be supplied to Table and data will be rendered automatically

```
import React from 'react';

export const tableConstants = (handleEdit) => {
  return [
    {
      title: 'ID',
      key: 'id',
      render: rowData => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      title: 'Name',
      key: 'name',
      render: rowData => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      title: 'Category',
      key: 'category',
      render: rowData => {
        return <span>{rowData.category}</span>;
      },
    },
    {
      title: 'Country',
      key: 'country',
      render: rowData => {
        return <span>{rowData.country}</span>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: rowData => {
        return <button onClick={() => handleEdit}>Edit</button>;
      },
    },
  ];
};
```

Here `tableConstants()` is a javascript function which returns an array of objects or columns to be displayed on table. This function accepts parameters whatever you need to have in constant function to perform any additional task such as any action to be taken or some additional data to be displayed or anything. Making this as function gives developers more power to take control on table.

Let's have a look into a single item for the table constants array:

```
{
  title: 'ID',
  key: 'id',
  render: rowData => {
    return <span>{rowData.id}</span>;
  },
}
```

Here render: () : receives 'rowData' which is the current iteration item for received from table component to this constants so you can dig down to any level of the JSON to display your desired input.

```
Eg: You have a nested JSON data as below
{
  name: 'Test',
  category: {
    name: 'Cateogory Name',
    subCategory: {
      name: 'Sub Category Name
    }
  }
}

and you have to show Sub Category name to any column you will have to refer it constant item as below:

{
  title: 'Sub Category',
  key: 'sub-category',
  render: rowData => {
    return <span>{rowData.category.subCategory.name}</span>;
  },
}

In this way you will not have to re-format the data everytime you send to table
```

## Props

| Property          | Description                                                            | Type    | Default | Required |
| ----------------- | ---------------------------------------------------------------------- | ------- | ------- | -------- |
| data              | Data array to be displayed on table                                    | array[] |         | Yes      |
| cols              | table constant function which returns array of columns to be displayed | array[] |         | Yes      |
| isDark   | To enable dark mode to table                         | boolean | false   | No       |
| hoverable | To hoverable bootstrap table                                                   | boolean | false   | No       |
| striped | To striped bootstrap table                                                   | boolean | false   | No       |
| bordered | To bordered bootstrap table                                                   | boolean | true   | No       |
