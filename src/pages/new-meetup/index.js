import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NewMeetupForm from '@/components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    try {
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log('Error occurred', e);
    } finally {
      router.push('/');
    }
  }
  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add your own meetups and create amazing opportunities" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
