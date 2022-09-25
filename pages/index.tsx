import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';
import Layout from 'components/layout/Layout';

const Input = tw.input`
    text-center border h-20
`;

const MyDiv = styled.div`
  background: gold;
  font-size: 5rem;
  margin-top: 10px;
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <Input placeholder="box" />
            <MyDiv>Test Text</MyDiv>
          </h1>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
