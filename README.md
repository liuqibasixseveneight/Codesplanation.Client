# 🔥 liuqibasixseveneight - codesplanation

## Component folder structure

The _components_ folder structure is based on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) approaches and principles conceptualised by Brad Frost. Please see our adapted structure demonstrated below:

```
components/
├─ pages/
├─ templates/
├─ ui/
│  ├─ atoms/
│  ├─ molecules/
│  ├─ organisms/
```

The below highlights our definitions for each component-type, ordered by severity.

Please also note that the below definitions are taken and/or adapted from the article _How to Implement Atomic Design System in React_ posted by logicwind [here](https://blog.logicwind.com/implement-atomic-design-component-in-react/).

### Atoms

Atoms are like HTML tags, labels, inputs or buttons

### Molecules

Molecules consist of grouped atoms, such as a combined label and input

### Organisms

Organisms are made up of molecules, used to form relatively more complex components, such as a Header

### Templates

Templates consist mostly of grouped organisms used to create final structures, such as a complete form

### Pages

Pages are instances of templates, resulting in a finalised view visible to a user
