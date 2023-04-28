import { Fragment } from 'react';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/n1">NextJS Is A Great Framework</Link>
        </li>
        <li>
          <Link href="/news/n2">React Is A Great Javascript Library</Link>
        </li>
      </ul>
    </Fragment>
  );
}
