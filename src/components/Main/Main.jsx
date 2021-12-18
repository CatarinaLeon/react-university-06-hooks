import { useState, useContext } from 'react';
import Section from '../common/Section/Section';
import Header from '../common/Header/Header';
import UniversityBlock from '../UniversityBlock/UniversityBlock';
import TutorsBlock from '../TutorsBlock/TutorsBlock';
import CitiesBlock from '../CitiesBlock/CitiesBlock';
import DepartmentsBlock from '../DepartmentsBlock/DepartmentsBlock';
import { ThemeContext, themes } from 'context/themeContext';
import univerInfo from '../../data/univerInfo.json';

import tutorsIcon from '../../images/cat.png';
import citiesIcon from '../../images/pin.png';
import departmentsIcon from '../../images/robot.png';

import s from './Main.module.css';

const { name, description } = univerInfo;

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const [showTutots, setShowTutots] = useState(true); // ВРЕМЕННЫЙ
  return (
    <main className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      <Header title="Информация о университете" />

      <UniversityBlock name={name} descr={description} />

      {/* ВРЕМЕННAЯ КНОПКА */}
      <button
        style={{ padding: 10, display: 'none' }}
        onClick={() => setShowTutots(!showTutots)}
      >
        Toggle tutors
      </button>

      {showTutots && (
        <Section icon={tutorsIcon} title="Преподаватели">
          <TutorsBlock />
        </Section>
      )}

      <Section icon={citiesIcon} title="Города">
        <CitiesBlock />
      </Section>

      <Section icon={departmentsIcon} title="Факультеты">
        <DepartmentsBlock />
      </Section>
    </main>
  );
};
// console.log('ffffffffff', departments);
export default Main;
