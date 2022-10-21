---
sidebar_position: 1
---

# Create a Template

## Prerequisites

Obviously to work on Excel exports, you need to have Excel installed on your computer. You can use any version of Excel,
but we recommend to use the latest version.

## Create a new template file

Usually, when implementing a new Excel export in your software, you know how your Excel file should look like.

You can create a new Excel file and start to build from it. You can have a reference file opened as well to copy/paste
some cells.

Here is an example of what we would like to achieve, it's a very basic list of data with a formatted header and title :

![Excel export example](/img/xlsx-basic-contact-list.png)

### Start by creating worksheets

The Excel template **must** contain a worksheet called **temp**, and other worksheets named as you want, you will refer
the other worksheets in the JSON data.

The JSON to XLSX tool allows you to fill-in several worksheets at once if needed.

![Excel template worksheets](/img/xlsx-worksheets.png)

This **temp** worksheet will be used to store mini templates that will be used to generate the final Excel file (in this
case, lines of a table).

### Create the main layout of the Excel template file

Use the main worksheet to prepare the Excel formatting you need, here **contacts**

The main layout contains all data that is not a list, with formatting, but that could be dynamic.

To add dynamic data to the layout, use variable names that are in between superior and inferior signs, like
this : `<myVariable>`

Those variables will be replaced upon generation by the values in the JSON data.

![Main layout of the template](/img/xlsx-contacts-layout.png)

### Create the mini template

Use the **temp** worksheet to create the mini template that will be used for each contact line.

For creating a line, it is usefull to copy-paste the header from **contacts** worksheet to **temp** so you know which
column you are manipulating.

Here you need to detail each cell with dynamic data that will be replaced by the JSON data, using the same formatting as
before : `<myVariable>`

Afterwards, you need to create a name range for the line. This is
documented [here on microsoft website](https://support.microsoft.com/en-us/office/create-a-named-range-in-excel-adee78ff-bcf0-4283-8c29-83304ca0c29d)
. The easiest way is to select the cells of the line, and click on top left part (see prinstcreen below) to define the
name of the name range, here `contact_line`.

![Contact line template](/img/xlsx-contact-line-template.png)

When processing JSON to create the lines, JSON to XLSX will use the name range to copy-paste the line and integrate the
JSON data in it.

Congratulations, your template is ready !

You can download the sample template here: [contacts_template.xlsx](/xlsx/contacts_template.xlsx)