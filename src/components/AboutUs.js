import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import './AboutUs.css'

const ApproachSection = ({ title, subtitle, image, contentTitle, contentText }) => (
  <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg transition-transform hover:shadow-xl hover:-translate-y-1">
    <div className="space-y-2 bg-gray-50 border-b border-gray-100 p-6">
      <div className="relative h-48 w-full">
        <img 
          src={image}
          alt={contentTitle}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold tracking-tight text-gray-900">{contentTitle}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>

    <div className="p-6">
      <p className="text-gray-700 leading-relaxed">{contentText}</p>
    </div>
  </div>
);

const AboutUs = () => {
  const sections = [
    {
      title: 'Our Approach',
      subtitle: 'Building Learning Ecosystems with Neuroscience at the Core',
      contentTitle: 'Curiosity',
      contentText: 'Ignite the spark of exploration. We design experiences that make learning exciting and rewarding. Through interactive challenges and immediate feedback, learners uncover new concepts, fueling their drive to explore deeper.',
      image: 'https://framerusercontent.com/images/eZawA25KYFAJCX7g036SXphNWc.webp'
    },
    {
      title: 'Our Approach',
      subtitle: 'Building Learning Ecosystems with Neuroscience at the Core',
      contentTitle: 'Mastery',
      contentText: 'Small wins for great achievements. Our tools promote continuous improvement by breaking complex skills into manageable subskills. With progress tracking and gamified rewards, learners celebrate milestones on their journey to mastery.',
      image: 'https://framerusercontent.com/images/Cvbxh9sSdJoyS4mKkYjmCdWEo4.webp'
    },
    {
      title: 'Our Approach',
      subtitle: 'Building Learning Ecosystems with Neuroscience at the Core',
      contentTitle: 'Autonomy',
      contentText: 'Your learning, your way. We empower learners to take control of their educational paths. Whether choosing communities, collaborative spaces, or quests, learners design their experience, ensuring it aligns with their goals and passions.',
      image: 'https://framerusercontent.com/images/Il0cRCKdCCl20MVtBJLN4hfsHtE.webp'
    },
    {
      title: 'Our Approach',
      subtitle: 'Building Learning Ecosystems with Neuroscience at the Core',
      contentTitle: 'Purpose',
      contentText: 'Align actions with meaning. Every task, space, and activity is tied to a greater purpose. Learners reflect on their contributions, ensuring their efforts drive impactful change while reinforcing their commitment to meaningful learning.',
      image: 'https://framerusercontent.com/images/c6Vb4CcMAMAx5NnVGaSUJ4Cxpag.webp'
    },
    {
      title: 'Our Approach',
      subtitle: 'Building Learning Ecosystems with Neuroscience at the Core',
      contentTitle: 'Collaboration',
      contentText: 'Fostering a culture of collaboration. We believe that learning is enhanced through collaboration. Our platforms encourage learners to work together, share insights, and support each other in their educational journeys.',
      image: 'https://framerusercontent.com/images/tOjwMZqYotPESPjeTSEx2bzok6Q.webp'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Vision Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                A world where learning is inclusive, engaging, and purpose-driven. We envision an ecosystem where communities thrive on peer-to-peer collaboration, learners achieve mastery through intrinsic motivation, and education becomes a lifelong journey powered by curiosity and shared purpose.
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://framerusercontent.com/images/LwdPLeIKEB4gwvKVWaFoyngxiN0.jpg?scale-down-to=1024"
                alt="Vision"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex text-center flex-col justify-start flex-shrink-0">
        <p className="font-bold text-2xl" style={{ fontFamily: '"Poppins", "Poppins Placeholder", sans-serif' }}>Our Approach</p>
        <p className="text-lg" style={{ fontFamily: '"Poppins", "Poppins Placeholder", sans-serif' }}>Building Learning Ecosystems with Neuroscience at the Core</p>
      </div>
      {/* Approach Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <ApproachSection key={index} {...section} />
          ))}
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="meet-the-team py-5">
        <Container>
          <h2 className="text-center mb-4">Meet the Team</h2>
          <Row className="justify-content-center">
            {[{name: "Nayan Kanaparthi", role: "CEO (Co-Founder)", img: "https://framerusercontent.com/images/uZfwyXMWpaR7qg1TyG08gmNkc0o.jpg", linkedin: "https://www.linkedin.com/in/nayan-kanaparthi-7383a2183/"}, 
            {name: "Praveen Kollipara", role: "CFO (Co-Founder)", img: "https://framerusercontent.com/images/xOzznGjVzrLF4rBS2zIOkQCicY.jpg", linkedin: "https://www.linkedin.com/in/praveenkollipara19/"}, 
            {name: "Sai Anjana Perepi", role: "Product Lead", img: "https://framerusercontent.com/images/02U1U7KNYQuoRlYT6uPrpjkucLg.jpg", linkedin: "https://www.linkedin.com/in/anjanaperepi007/"}, 
            {name: "Richard Abishai", role: "Researcher", img: "https://framerusercontent.com/images/ubhrWBX1ouwKVMs8iVFcEkqbA.jpg", linkedin: "https://www.linkedin.com/in/richard-abishai/"}
            ].map((member, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <div className="team-member shadow-lg text-center p-3 h-100">
                  <img src={member.img} alt={member.name} className="img-fluid rounded-circle mb-3" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
                  <h4>{member.name}</h4>
                  <h6 className="text-muted mb-3">{member.role}</h6>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="contact-section mt-5">
        <h2 className="heading-text text-center">
        Join our team
        </h2>
        <div className="iframe-container">
          <div className="iframe-wrapper">
            <iframe
              src="https://form.typeform.com/to/DiCQWx8d"
              title="Resume Submission"
              allow="microphone; camera"
              style={{
                border: "0",
                width: "80%",
                height: "300px", // Fixed height for consistency
                maxWidth: "800px", // Optional: prevent extremely wide forms
              }}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
