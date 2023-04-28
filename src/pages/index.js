import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '@/components/meetups/MeetupList';

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React Meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//   return {
//     props: DUMMY_MEETUPS,
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://me12b146:7AV9f8n2KVujFTce@apac-mumbai.mezpcbu.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db('next');

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600,
  };
}
