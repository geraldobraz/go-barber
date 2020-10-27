import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import {
  Appointment,
  Calendar,
  Container,
  Content,
  Header,
  HeaderContent,
  NextAppointment,
  Profile,
  Schedule,
  Section,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Welcome,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Appointments Schedule</h1>
          <p>
            <span>Today</span>
            <span>Day 06</span>
            <span>Monday</span>
          </p>

          <NextAppointment>
            <strong>Next appointment</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/26909405?s=460&u=e8aa8fd4ea8cf75d127102f080906df0a1d2ea14&v=4"
                alt="Geraldo Braz"
              />
              <strong>Geraldo Braz</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Morning</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/26909405?s=460&u=e8aa8fd4ea8cf75d127102f080906df0a1d2ea14&v=4"
                  alt="Geraldo Braz"
                />
                <strong>Geraldo Braz</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/26909405?s=460&u=e8aa8fd4ea8cf75d127102f080906df0a1d2ea14&v=4"
                  alt="Geraldo Braz"
                />
                <strong>Geraldo Braz</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Afternoon</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/26909405?s=460&u=e8aa8fd4ea8cf75d127102f080906df0a1d2ea14&v=4"
                  alt="Geraldo Braz"
                />
                <strong>Geraldo Braz</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/26909405?s=460&u=e8aa8fd4ea8cf75d127102f080906df0a1d2ea14&v=4"
                  alt="Geraldo Braz"
                />
                <strong>Geraldo Braz</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
