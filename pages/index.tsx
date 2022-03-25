import Navbar from "src/components/Navbar";
import Sidebar from "src/components/Sidebar";
import Article from "src/components/article/Article";
import Head from "next/head";
import client from "src/lib/apollo";
import { gql } from "@apollo/client";
import { UserProps } from "src/types/userTypes";
import IndexContainer from "src/components/Index";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
      query Query {
        user {
          id
          index
          name
          image
          tagline
          email
          github
          website
          location
          strength
          phone
          objective
          born
          englishSkill
          backEndSkills
          frontEndSkills
          infrastructures
          project {
            id
            description
            index
            sourceCode
            techniques
            technologies
            title
            link1
            link2
            link3
            finished
          }
          education {
            id
            index
            institution
            degree
            date
            fieldOfStudy
          }
          skill {
            listening
            reading
            speaking
            writing
            personalities
          }
        }
      }
    `,
  });

  return {
    props: {
      user: data.user[0],
    },
  };
};

const Home = ({ user }: UserProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <IndexContainer>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar user={user} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Sidebar user={user} />
        <Article user={user} />
      </div>
    </IndexContainer>
  );
};

export default Home;
