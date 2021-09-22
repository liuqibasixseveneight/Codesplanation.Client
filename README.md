# 🔥 liuqibasixseveneight - Codesplanation.Client

## What is 'Codesplanation'?

Codesplanation is a platform dedicated towards the betterment of the developer code-sharing and understanding experience.

Currently, developers attempting to explain their code are limited to a few primary options:

- contaminating their code with excessive comments
- overly detailing readme's and/or documentation
- writing time consuming blog posts and articles

Codesplanation aims to solve these issues. Instead of writing lengthy documents, exhaustive articles or going through comment chaos, developers can instead annotate their code snippets line-by-line. This enables developers to clearly express their logic and intentions whilst allowing readers to have a better and more effective code-consumption experience.

If, by chance, a reader doesn't understand some of the written and/or annotated code, they are then able to narrow down their misunderstanding(s) to facilitate faster knowledge transfer.

### Purpose

**To facilitate clear, concise explanations of code snippets, segments and blocks for all developers, regardless of level, allowing other developers to read, understand and consume code faster and more effectively.**

## Codesplanation repositories

- [**Codesplanation.Client**](https://github.com/liuqibasixseveneight/Codesplanation.Client)
  - This is used to render out the frontend
- [**Codesplanation.Server**](https://github.com/liuqibasixseveneight/Codesplanation.Server)
  - This is used to connect and query the backend

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
