import React from 'react';

import { ContentWrapper, PageHeading } from '../../templates';
import { Form } from '../../ui';
import { useCreatePost, useForm } from '../../../hooks';
import { CodeInputArea } from '../../ui';
import { Wrapper } from './CreatePost.styles';

export default function CreatePost() {
  // const [errors, setErrors] = useState();
  const { onChange, onSubmit, values } = useForm(createPostCallBack, {
    title: '',
    subtitle: '',
    difficulty: '',
    body: '',
  });

  const [
    createPost,
    // { loading, data, error },
  ] = useCreatePost(values);

  function createPostCallBack() {
    createPost();
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <PageHeading
          heading='Create Post'
          subheading='Explain or demonstrate your code with a new post below'
        />

        <CodeInputArea language='jsx' placeholder='Please enter JSX code' />

        <Form onSubmit={onSubmit} noValidate>
          <Form.Input
            placeholder='Title'
            label='Title'
            name='title'
            value={values.title}
            onChange={onChange}
            // error={errors.title}
          />

          <Form.Input
            placeholder='Subtitle'
            label='Subtitle'
            name='subtitle'
            value={values.subtitle}
            onChange={onChange}
            // error={errors.subtitle}
          />

          <Form.Input
            placeholder='Difficulty'
            label='Difficulty'
            name='difficulty'
            value={values.difficulty}
            onChange={onChange}
            // error={errors.difficulty}
          />

          <Form.Input
            placeholder='Post'
            label='Post'
            name='body'
            value={values.body}
            onChange={onChange}
            // error={errors.post}
          />

          <Form.Input type='submit' onSubmit={onSubmit} value='Create Post' />
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
}
