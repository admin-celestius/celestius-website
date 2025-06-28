import { motion } from 'framer-motion';
import { CalendarIcon } from '@/components/ui/svgs'; // Adjust the import path as needed
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // Adjust the import path as needed
import { Button } from '@/components/ui/button'; // Adjust the import path as needed

const UpcomingEventsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="events"
      className="bg-muted text-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center space-y-12"
    >
      <div className="container px-4 md:px-6 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-begin" data-aos="fade-up">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card data-aos="fade-up" data-aos-delay="100">
            <CardHeader>
              <CardTitle>Workshops</CardTitle>
              <CardDescription>
                Sessions on programming languages and technologies to enhance your skills.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <CalendarIcon className="w-5 h-5 mr-2 inline" />
                  <span>November 20, 2024</span>
                </div>
                {/* <Button variant="secondary" size="sm">
                  Register
                </Button> */}
              </div>
            </CardContent>
          </Card>

          <Card data-aos="fade-up" data-aos-delay="200">
            <CardHeader>
              <CardTitle>Industry Expert Talks</CardTitle>
              <CardDescription>
                Sessions with tech professionals sharing their experiences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <CalendarIcon className="w-5 h-5 mr-2 inline" />
                  <span>Decemeber 18, 2024</span>
                </div>
                {/* <Button variant="secondary" size="sm">
                  Register
                </Button> */}
              </div>
            </CardContent>
          </Card>

          <Card data-aos="fade-up" data-aos-delay="300">
            <CardHeader>
              <CardTitle>Mirabilia</CardTitle>
              <CardDescription>
              The most monumental event we've ever hosted — an unforgettable spectacle of grandeur and mystery.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <CalendarIcon className="w-5 h-5 mr-2 inline" />
                  <span>January 2025</span>
                </div>
                {/* <Button variant="secondary" size="sm">
                  Register
                </Button> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default UpcomingEventsSection;