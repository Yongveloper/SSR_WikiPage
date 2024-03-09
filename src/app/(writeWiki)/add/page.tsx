import React from 'react';
import WikiForm from '../_components/WikiForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '코딩허브 | 게시물 작성',
  description: '게시물 작성 페이지입니다.',
};

function Add() {
  return <WikiForm />;
}

export default Add;
