import { Layout } from '../MeetingsLayout/Layout';
import Meetings from '../components/Meetings/Meetings';
import Progress from '../components/Progress/Progress';

const meetings = () => {
  return (
    <Layout>
      <Progress/>
      <Meetings/>
    </Layout>
  );
};

export default meetings;