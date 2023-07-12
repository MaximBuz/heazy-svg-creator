import { NextPage } from 'next';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import Meta from '../partials/seo-meta';
import Navbar from '../Components/Navbar';

const Privacy: NextPage = () => {
  return (
    <>
      <Meta
        title="Privacy Policy | Heazy"
        desc="Our privacy policy."
        canonical={
          process.env.NEXT_PUBLIC_APP_URL + '/privacy' ||
          'https://app.heazystudio.com/privacy'
        }
        css="/static/css/styles.css"
        js="/static/js/scripts.js"
      />
      <div style={{ fontFamily: 'Karla, sans-serif', color: '#c5cfd9' }}>
        <main>
          <Box
            width="100%"
            minHeight="100vh"
            className="gradient-bg"
            padding={{ base: '0 1.5em', lg: '0 10em' }}
            bgPos="top"
            bgImage="linear-gradient(0,rgb(18, 20, 28,0) 7%,rgb(18, 20, 28, 0) 20%),radial-gradient(circle farthest-side at -170% 170%,#1A202C 48%,rgb(18, 20, 28,0) 65%),radial-gradient(circle farthest-corner at -55% -125%,rgb(18, 20, 28,0) 50%,rgb(18, 20, 28) 70%,rgb(18, 20, 28,0) 72%),radial-gradient(circle farthest-corner at 0 -50%,rgb(18, 20, 28) 32%,hsla(0,0%,100%,0) 62%),radial-gradient(circle farthest-side at 0 -25%,#007252 50%,rgb(18, 20, 28,0) 72%),radial-gradient(circle farthest-corner at 50% -100%,#05f 26%,rgb(18, 20, 28,0) 72%);"
          >
            <Flex direction="column">
              <Navbar></Navbar>

              <Box p="3em">
                <Heading
                  textAlign="center"
                  mb="0.5em"
                  fontWeight="700"
                  fontSize={{ base: '2em', lg: '3em' }}
                >
                  Privacy
                </Heading>
                <Heading
                  textAlign="center"
                  mb="0.5em"
                  fontWeight="400"
                  fontSize={{ base: '0.75em', lg: '1.5em' }}
                >
                  These policies describe how your information is collected,{' '}
                  <br /> used and shared when you use heazy.studio
                </Heading>
                <Heading
                  textAlign="center"
                  mb="2em"
                  fontWeight="400"
                  fontSize={{ base: '0.5em', lg: '1em' }}
                >
                  Last updated June 14, 2022
                </Heading>
                <Tabs>
                  <TabList>
                    <Tab>Privacy Policy</Tab>
                    <Tab>Cookie Policy</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Accordion allowToggle>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Summary of Key Points
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              This privacy notice for Maxim Buz ('Company',
                              'we', 'us', or 'our',), describes how and why we
                              might collect, store, use, and/or share
                              ('process') your information when you use our
                              services ('Services'), such as when you: Visit our
                              website at https://heazy.studio/, or any website
                              of ours that links to this privacy notice Engage
                              with us in other related ways, including any
                              sales, marketing, or events Questions or concerns?
                              Reading this privacy notice will help you
                              understand your privacy rights and choices. If you
                              do not agree with our policies and practices,
                              please do not use our Services. If you still have
                              any questions or concerns, please contact us at
                              mbuz.maxim@gmail.com.
                            </Text>
                            <Heading as="h3" size="sm">
                              Summary of Key points
                            </Heading>
                            <Text>
                              {`
This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.

What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Maxim Buz and the Services, the choices you make, and the products and features you use. Click here to learn more.

Do we process any sensitive personal information? We do not process sensitive personal information.

Do we receive any information from third parties? We do not receive any information from third parties.

How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click here to learn more.

In what situations and with which types of parties do we share personal information? We may share information in specific situations and with specific categories of third parties. Click here to learn more.

How do we keep your information safe? We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click here to learn more.

What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click here to learn more.

How do you exercise your rights? The easiest way to exercise your rights is by contacting us via email at mbuz.maxim@gmail.com. We will consider and act upon any request in accordance with applicable data protection laws.

Want to learn more about what Maxim Buz does with any information we collect?
                      `}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  What information do we collect?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Heading as="h3" size="sm">
                              Personal information you disclose to us
                            </Heading>
                            <Text>
                              {`In Short: We collect personal information that you provide to us.

We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.

Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
email addresses
usernames
passwords
Sensitive Information. We do not process sensitive information.

All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.`}
                            </Text>
                            <Heading as="h3" size="sm">
                              Information automatically collected
                            </Heading>
                            <Text>
                              {`In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.

We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.

Like many businesses, we also collect information through cookies and similar technologies.

The information we collect includes:
Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).
Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.`}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  How do we process your information?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              {`In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.

We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.

To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.`}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  What legal bases do we rely on to process your
                                  information?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>{`In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.

If you are located in the EU or UK, this section applies to you.

The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
Consent. We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Click here to learn more.
Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.

If you are located in Canada, this section applies to you.

We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can withdraw your consent at any time. Click here to learn more.

In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
For investigations and fraud detection and prevention
For business transactions provided certain conditions are met
If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim
For identifying injured, ill, or deceased persons and communicating with next of kin
If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
If the collection is solely for journalistic, artistic, or literary purposes
If the information is publicly available and is specified by the regulations`}</Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  When and with whom do we share your personal
                                  information?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>{`In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.

Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ('third parties') who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organisation apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows:
Cloud Computing Services
Data Analytics Services
Data Storage Service Providers
User Account Registration & Authentication Services

We may use third-party analytics services on our Site, such as Google Analytics.  The analytics providers that administer these services use technologies such as cookies, web beacons and similar technologies to help us analyze your use of the Site, as further described in our Cookie Notice. To learn more about how to opt out of Google Analytics services, please visit the link below:
Google Analytics: https://tools.google.com/dlpage/gaoptout

We also may need to share your personal information in the following situations:
Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.`}</Text>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Do we use cookies and other tracking
                                  technologies?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>{`In Short: We may use cookies and other tracking technologies to collect and store your information.

We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.`}</Text>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  How long do we keep your information?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>{`In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.

We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.

When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.`}</Text>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  How do we keep your information safe?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>{`In Short: We aim to protect your personal information through a system of organisational and technical security measures.

We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.`}</Text>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Do we collect information from minors?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>{`In Short: We do not knowingly collect data from or market to children under 18 years of age.

We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at mbuz.maxim@gmail.com.`}</Text>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  What are your privacy rights?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>{`In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.

In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.

We will consider and act upon any request in accordance with applicable data protection laws.
 
If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.

If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.

Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.

However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.`}</Text>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Account Information
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>{`If you would at any time like to review or change the information in your account or terminate your account, you can:
Contact us using the contact information provided.
Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.

Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.

If you have questions or comments about your privacy rights, you may email us at mbuz.maxim@gmail.com.`}</Text>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Controls for Do-Not-Track Features
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              {
                                "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice."
                              }
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Do we make updates to this notice?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>{`In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.

We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.`}</Text>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  How can you contact us about this notice?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>{`If you have questions or comments about this notice, you may email us at mbuz.maxim@gmail.com or by post to:

Maxim Buz
Rodheimerstr. 96
Gießen, Hesse 35398
Germany`}</Text>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  How can you review, update, or delete the data
                                  we collect from you?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              {
                                'Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please contact us at mbuz.maxim@gmail.com.'
                              }
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </TabPanel>
                    {/* COOKIE */}
                    <TabPanel>
                      <Accordion allowToggle>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Introduction
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              {`This Cookie Policy explains how Maxim Buz ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our websites at https://app.heazy.studio, ("Websites"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.

In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.`}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  What are cookies?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              {`Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.

Cookies set by the website owner (in this case, Maxim Buz) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.`}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Why do we use cookies?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              {`We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes. This is described in more detail below.

The specific types of first and third party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit)`}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  How can I control cookies?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              {`You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.

The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.

In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit http://www.aboutads.info/choices/ or http://www.youronlinechoices.com.

The specific types of first and third party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):`}
                            </Text>
                            <Heading m={2} as="h3" size={'sm'}>
                              Third Party Cookies
                            </Heading>
                            <Text>
                              {`We work with third parties that provide services to support our Site. For example, we use analytics services supported by third party companies, who generate analytics cookies on our behalf, such as Google Analytics.  We may not have access to these cookies, although we may use statistical information arising from the cookies provided by these third parties to customize the Site and for the other purposes described above. These companies may also transfer this information to other parties where required to do so by law, or where such other parties process the information on their behalf.
                              
                              For information about how to opt-out of Google Analytics cookies, please use the following link:

Google Analytics: https://tools.google.com/dlpage/gaoptout`}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  What about other tracking technologies, like
                                  web beacons?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              {
                                'Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Websites or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.'
                              }
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Do you use Flash cookies or Local Shared
                                  Objects?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              {`Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things, collect and store information about your use of our services, fraud prevention and for other site operations.

If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to "information" on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).

Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.`}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Do you serve targeted advertising?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>{'In short: No.'}</Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  How often will you update this Cookie Policy?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              {`We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.

The date at the top of this Cookie Policy indicates when it was last updated.`}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Where can I get further information?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              {`If you have any questions about our use of cookies or other technologies, please email us at mbuz.maxim@gmail.com or by post to:

Maxim Buz
Rodheimerstr. 96
Gießen, Hesse 35398
Germany`}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Flex>
          </Box>
        </main>
      </div>
    </>
  );
};

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar'])),
    },
  };
}

export default Privacy;
