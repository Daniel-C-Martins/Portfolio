import { useTranslation } from 'react-i18next';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Download,
  Coffee,
  Calendar,
  GraduationCap,
  Briefcase,
  Brain,
  FlaskConical,
  Layout,
  Users
} from 'lucide-react';
import profile from "@/assets/profile.jpeg";

export function About() {
  const { t } = useTranslation();

  const skills = [
    { name: 'Java & Spring', icon: <Coffee size={24} />, color: 'text-red-500' },
    { name: 'Python & Django', icon: <Code2 size={24} />, color: 'text-yellow-500' },
    { name: 'Machine Learning', icon: <Brain size={24} />, color: 'text-green-500' },
    { name: 'React & TS', icon: <Layout size={24} />, color: 'text-blue-500' },
    { name: 'Linux & DevOps', icon: <Terminal size={24} />, color: 'text-orange-500' },
    { name: 'Databases & SQL', icon: <Database size={24} />, color: 'text-cyan-500' },
  ];

  const timelineData = [
    {
      // DELL (P&D)
      dateKey: "about_page.timeline.work_4_date",
      titleKey: "about_page.timeline.work_4_title",
      descKey: "about_page.timeline.work_4_desc",
      icon: <FlaskConical size={20} />,
    },
    {
      // PET
      dateKey: "about_page.timeline.work_3_date",
      titleKey: "about_page.timeline.work_3_title",
      descKey: "about_page.timeline.work_3_desc",
      icon: <Users size={20} />,
    },
    {
      // ALURA
      dateKey: "about_page.timeline.work_2_date",
      titleKey: "about_page.timeline.work_2_title",
      descKey: "about_page.timeline.work_2_desc",
      icon: <Code2 size={20} />,
    },
    {
      // PUCRS
      dateKey: "about_page.timeline.edu_1_date",
      titleKey: "about_page.timeline.edu_1_title",
      descKey: "about_page.timeline.edu_1_desc",
      icon: <GraduationCap size={20} />,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-zinc-100">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t('about_page.title')} <span className="text-blue-500">{t('about_page.subtitle')}</span>
        </h1>
      </div>

      {/* Bio + Foto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative group mx-auto w-full max-w-md">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            <img src={profile} alt="Profile" className="w-full h-full" />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-500 flex items-center gap-2">
            <FlaskConical className="text-white" /> {t('about_page.bio_title')}
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed text-justify">
            {t('about_page.bio_text_1')}
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed text-justify">
            {t('about_page.bio_text_2')}
          </p>
          <div className="pt-4">
            <a href="/cv.pdf" download className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer">
              <Download size={20} />{t('about_page.btn_cv')}
            </a>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
          <Cpu className="text-blue-500" /> {t('about_page.skills_title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center justify-center p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300 group hover:-translate-y-1">
              <div className={`mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>{skill.icon}</div>
              <span className="font-medium text-zinc-300 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Calendar className="text-blue-500" /> {t('about_page.timeline.title')}
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent">

          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start group">

              {/* Bolinha (Ícone) */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-colors duration-300 z-10 shadow-lg shadow-black">
                <div className="text-zinc-400 group-hover:text-blue-500 transition-colors">
                  {item.icon}
                </div>
              </div>

              {/* Card de Conteúdo */}
              <div className="relative z-10 ml-16 bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors w-full hover:bg-zinc-800">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
                  {t(item.dateKey)}
                </span>

                <h3 className="text-xl font-bold text-zinc-100 mb-2">
                  {t(item.titleKey)}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm">
                  {t(item.descKey)}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}