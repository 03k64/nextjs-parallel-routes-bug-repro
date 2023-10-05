'use client';

import { ErrorPage as Page } from '@/src/components';

interface Props {
  error: Error;
}

const ErrorPage = ({ error }: Props) => <Page error={error} />;

export default ErrorPage;
