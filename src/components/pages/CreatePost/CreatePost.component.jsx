import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { BsChevronLeft } from 'react-icons/bs';

import { ContentWrapper, PageHeading } from '../../templates';
import { Button, Form } from '../../ui';
import { useCreatePost, useForm } from '../../../hooks';
import { Wrapper } from './CreatePost.styles';

export default function CreatePost({ history }) {
  // const [errors, setErrors] = useState();
  const [bodyValue, setBodyValue] = useState(
    '**Please write your post below. If you can write markdown, that helps!**'
  );
  const { onChange, onSubmit, values } = useForm(createPostCallBack, {
    title: '',
    subtitle: '',
    difficulty: '',
  });

  const valuesToUse = {
    ...values,
    body: bodyValue,
  };

  const [createPost, { loading, data, error }] = useCreatePost(valuesToUse);
  const createdPost = get(data, 'createPost');

  function createPostCallBack() {
    createPost();
  }

  useEffect(() => {
    if (data) {
      history.push(`id=${createdPost?.id}`);
    }
  }, [data, history, createdPost]);

  if (loading) {
    return <span>Loading...</span>;
  }
  if (error) {
    console.error('Error!: ', error);
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <PageHeading
          heading='Create Post'
          subheading='Explain or demonstrate your code with a new post below'
          navButton={
            <Button
              linkButton
              to={'/posts'}
              icon={<BsChevronLeft />}
              text='Back to Posts'
            />
          }
        />

        <Form onSubmit={onSubmit} noValidate>
          <Form.Input
            placeholder='Title'
            label='Title'
            name='title'
            value={values?.title}
            onChange={onChange}
            // error={errors?.title}
          />

          <Form.Input
            placeholder='Subtitle'
            label='Subtitle'
            name='subtitle'
            value={values?.subtitle}
            onChange={onChange}
            // error={errors?.subtitle}
          />

          <Form.Input
            placeholder='Difficulty'
            label='Difficulty'
            name='difficulty'
            value={values?.difficulty}
            onChange={onChange}
            // error={errors?.difficulty}
          />

          <Form.MarkdownInput
            placeholder='Post'
            label='Post'
            name='body'
            value={bodyValue}
            onChange={setBodyValue}
            // error={errors?.body}
          />

          <Form.Input type='submit' onSubmit={onSubmit} value='Create Post' />
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
}
