import hero from './images/jobaa.png';
import create from './images/jobalerts.png';
import resume from './images/airesume.png';
import cover from './images/cover.png';
import career from './images/career.png';
import jobwaiting from './images/jobwaiting.png';
import { Unisection } from './components/shared/Unisection';
import { Flex } from '@chakra-ui/react';

export function App() {
  return (
    <Flex direction='column'>
      <Unisection
        showBtn={true}
        title={'Discover the power of effortless job hunting with Jobanaut.'}
        desc={
          'Welcome to Jobanaut, the easiest way to find your dream job. With our powerful search engine and custom alerts, you will never miss a great opportunity.'
        }
        addBg
        image={hero}
      />

      <Unisection
        title={'Create personalized Job Alerts'}
        desc={
          "Custom alerts can help you get better jobs by ensuring that you're the first to know about new opportunities that match your preferences. Instead of manually checking job sites and company career pages every day, you can set up job alerts on Jobanaut based on your preferred search criteria"
        }
        image={create}
      />

      <Unisection
        title={'AI Powered Resume Builder'}
        desc={
          'With our AI-powered resume writing service, you can create a professional resume quickly and easily. Our AI technology analyzes your skills, experience, and qualifications, and generates a customized resume that is tailored to your specific career goals and job search needs. By using our AI-powered resume writing service, you can ensure that your resume stands out from the competition and impresses potential employers.'
        }
        image={resume}
      />
      <Unisection
        title={'AI Powered Cover Letter Writer'}
        desc={
          'Our AI-powered cover letter writing service generates customized cover letters that highlight your strengths and demonstrate your fit for the job, helping you save time and increase your chances of landing an interview.'
        }
        image={cover}
      />
      <Unisection
        title={'Career Development Resources'}
        desc={
          'Jobanaut is the ultimate job hunting tool that harnesses the power of technology to streamline your job search and application. '
        }
        image={career}
      />
      <Unisection
        title={'Career Development Resources'}
        showGetBtn={true}
        image={jobwaiting}
        addBg
      />
    </Flex>
  );
}
