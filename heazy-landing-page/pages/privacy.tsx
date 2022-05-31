import { NextPage } from 'next';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Text, Flex } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import Meta from '../partials/seo-meta';
import Navbar from '../Components/Navbar';

const Privacy: NextPage = () => {
  return (
    <>
      <Meta
        title="Privacy Policy | Heazy"
        desc="Our privacy policy."
        canonical="https://heazy.studio/privacy"
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
                <Heading textAlign="center" mb="0.5em" fontWeight="700" fontSize={{ base: '2em', lg: '3em' }}>
                  Privacy Policy
                </Heading>
                <Heading
                  textAlign="center"
                  mb="0.5em"
                  fontWeight="400"
                  fontSize={{ base: '0.75em', lg: '1.5em' }}
                >
                  This Privacy Policy describes how your information is collected, <br /> used and shared when
                  you use heazy.studio
                </Heading>
                <Tabs>
                  <TabList>
                    <Tab>English</Tab>
                    <Tab>German</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Accordion>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Data Collected
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              When you visit the Website, I automatically collect certain information about
                              your device, including information about the web browser, the device you are
                              accessing, and the country. When you navigate the Site, I also collect
                              information about the individual web pages you access and information about how
                              you interact with the Site. We refer to this automatically collected information
                              as "Device Information." I collect device information using "log files" that
                              record actions on the Website and collect data such as IP address, browser type,
                              Internet service provider, referring/exit pages, and date/time stamp.
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  How is that data used?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            I generally only use the information collected to log website views. We share your
                            data with third parties who assist us in using that information as described
                            above. We use Goat-Counter (see https://www.goatcounter.com/help/gdpr) to collect
                            usage data on the Website. Finally, we may also might share your information to
                            comply with applicable laws and regulations, to respond to a subpoena, search
                            warrant or other lawful request for information we receive, or to otherwise
                            protect our rights.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Do not track
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Please be advised that if we receive a "Do Not Track" signal from your browser, we
                            will not change our website's data collection and usage practices. Please also
                            note that usage data may be transferred outside of Europe.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Changes
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            We may occasionally change this Privacy Policy to reflect changes in our
                            practices, or for other operational, legal or regulatory reasons.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Contact
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            For more information about our privacy practices, if you have questions, or if you
                            would like to make a complaint, please contact me by e-mail at{' '}
                            <span>
                              <a href="mailto:mbuz.maxim@gmail.com">mbuz.maxim@gmail.com</a>
                            </span>{' '}
                            or by mail to the following address: Rodheimerstr 96, Giessen, Hesse, 35398,
                            Germany.
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </TabPanel>
                    <TabPanel>
                      <Accordion>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Erfasste Daten
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text>
                              Wenn Sie die Website besuchen, erfasse ich automatisch bestimmte Informationen
                              über Ihr Gerät, darunter Informationen zum Webbrowser, dem zugreifenden Gerät
                              und dem Land. Wenn Sie auf der Website navigieren, erfasse ich außerdem
                              Informationen zu den einzelnen Webseiten, die Sie aufrufen, sowie Informationen
                              darüber, wie Sie mit der Website interagieren. Diese automatisch erfassten
                              Informationen bezeichnen wir als "Geräteinformationen". Ich erfasse
                              Geräteinformationen mithilfe von "Protokolldateien". Diese protokollieren
                              Aktionen auf der Website und erfassen Daten wie IP-Adresse, Browsertyp,
                              Internetdienstanbieter, verweisende/Ausstiegsseiten sowie
                              Datums-/Uhrzeitstempel.
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Wie werden diese Daten verwendet?
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Ich verwenden die erfassten Informationen in der Regel nur zum protokollieren der
                            Aufrufe der Website. Wir geben Daten an Dritte weiter, die uns bei der Nutzung der
                            Daten wie oben beschrieben unterstützen. Zum sammeln der Nutzungsdaten auf der
                            Website verwenden wir Goat-Counter (siehe https://www.goatcounter.com/help/gdpr).
                            Schließlich können wir diese Daten auch weitergeben, um geltende Gesetze und
                            Vorschriften einzuhalten, um auf eine Vorladung, einen Durchsuchungsbefehl oder
                            eine andere rechtmäßige Anfrage nach Informationen, die wir erhalten, zu reagieren
                            oder um unsere Rechte anderweitig zu schützen.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Do not track
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Wir weisen Sie darauf hin, dass wir die Datenerfassungs- und -nutzungsverfahren
                            unserer Website nicht ändern, wenn wir von Ihrem Browser ein "Do Not Track"-Signal
                            erhalten. Bitte beachten Sie außerdem, dass die Nutzungsdaten außerhalb von Europa
                            übertragen werden können.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Änderungen
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Wir können diese Datenschutzerklärung gelegentlich ändern, um Änderungen unserer
                            Vorgehensweisen zu berücksichtigen, oder aus anderen betrieblichen, rechtlichen
                            oder aufsichtsrechtlichen Gründen.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Heading as="h2" size="md">
                                  Kontakt
                                </Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Wenn Sie weitere Informationen zu unseren Datenschutzverfahren benötigen, Fragen
                            haben oder eine Beschwerde einreichen möchten, kontaktieren Sie mich per E-Mail an{' '}
                            <span>
                              <a href="mailto:mbuz.maxim@gmail.com">mbuz.maxim@gmail.com</a>
                            </span>{' '}
                            oder per Post an die unten genannte Adresse: Rodheimerstr 96, Gießen, Hessen,
                            35398, Deutschland
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

export default Privacy;
