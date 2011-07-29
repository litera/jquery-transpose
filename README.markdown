jQuery .transpose() plugin
==
This plugin solves the problem of floated elements that by default flow in rows. Sometimes we need them to flow in columns (as in a phonebook) because it greatly aids readability. We need this ordering especially when dealing with alphabet ordered lists or ordered numbers. CSS3 offers column layout that does this perfectly but it's only supported by the latest browsers (excluding Internet Explorer 9). This plugin is especially useful when you don't have (or don't want to use) CSS3 column layout.

CSS3 column layout is great with either texts or lists of data. This plugin can't help you with text flow, but it can help you with lists of data that we used to display using CSS floating (`float: left` and fixed element width). The downside of floating is that elements flow in rows but instead we'd like to have them in columns so they're more readable. If you need them to be in columns, than this plugin is just for you.

How do we use it?
--
Just select your items with a jQuery selector and transpose them:

```javascript
$(".item").transpose();
```

It's as simple as that.

Simple example
--
Suppose you have 20 floated users that fit into 3 columns as per their container width

```
Anna       Amanda     Barbra
Betty      Billy      Clive
Cheryl     Danny      Dave
Emily      Emma       Enzo
Felix      Fillip     Freddy
Frodo      Gerry      Greta
Harry      Henry
```

These names aren't easy to find the right one. This list of names would be much better off if names were listed in columns. So you use this plugin and transpose them. End result looks like this:

```
Anna       Danny      Freddy
Amanda     Dave       Frodo
Barbra     Emily      Gerry
Betty      Emma       Greta
Billy      Enzo       Harry
Clive      Felix      Henry
Cheryl     Fillip
```

Now that's much better and human readable and friendly.

What about items in multiple containers?
--
What if your selector selected items in multiple lists (each contained in its own container). These items should of course be transposed per container rather than all together. This plugin is aware of this fact and transposes each item set individually so you don't have to transpose each item set separately.

When you should avoid using this plugin?
--
You may float your elements without a predefined width, so they flow in rows but they don't necessarily allign into columns. In this case you don't want to use this plugin because it assumes your elements have the same width thus they look as if they are displayed in columns.