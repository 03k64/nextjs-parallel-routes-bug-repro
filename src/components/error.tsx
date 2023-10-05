'use client';

interface Props {
  error: Error;
}

const ErrorPage = ({ error }: Props) => (
  <p>{error.toString()}</p>
);

export default ErrorPage;
