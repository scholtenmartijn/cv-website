import Image from 'next/image';
import { Mail, Github, Linkedin } from 'lucide-react';
import { CSSProperties } from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.profile}>
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          style={styles.image}
        />
        <h1 style={styles.title}>Martijn Scholten</h1>
        <p style={styles.text}>
          I’m Martijn Scholten, a detail-oriented Freelance Cloud Architect with over 10 years in the IT industry. My journey began in development, sparked by a lifelong passion for Linux. I’ve led teams and a container practice, successfully delivering projects on AWS, GCP, Kubernetes, and OpenShift. My expertise includes CI/CD, DevOps, SRE, automation, architecting, and engineering. I bring strong operational knowledge across key cloud pillars: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization. Proficient in Bash, Golang, Terraform and Python, I’m ready to help your company succeed.
          <br /><br />
          Please contact Martijn to see how he can assist your business.
        </p>
      </div>
      <div style={styles.links}>
        <a href="mailto:martijn.scholten@mrcontainer.nl" style={styles.button}>
          <Mail color="#4a4a4a" size={20} />
        </a>
        <a href="https://github.com/scholtenmartijn" style={styles.button}>
          <Github color="#4a4a4a" size={20} />
        </a>
        <a href="https://www.linkedin.com/in/scholten-martijn" style={styles.button}>
          <Linkedin color="#4a4a4a" size={20} />
        </a>
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    fontFamily: '"Roboto", sans-serif',
  },
  profile: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    borderRadius: '50%',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333333',
    marginBottom: '10px',
    fontWeight: 500, // Lighter weight for a more minimalist look
  },
  text: {
    color: '#333333',
    fontWeight: 300, // Lighter font weight for minimalist style
    fontSize: '0.9rem', // Slightly smaller font size for a cleaner look
    maxWidth: '600px',
    textAlign: 'left',
  },
  links: {
    marginTop: '20px',
    display: 'flex',
    gap: '15px',
  },
  button: {
    display: 'inline-block',
  },
};
