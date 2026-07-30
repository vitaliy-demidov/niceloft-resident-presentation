import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Check,
  ChevronRight,
  CircleDollarSign,
  Home,
  MessageCircle,
  PackageOpen,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
} from 'lucide-react'
import Lenis from 'lenis'

const nav = [
  ['01', 'Зачем', '#why'],
  ['02', 'Сценарии', '#scenarios'],
  ['03', 'Для кого', '#audience'],
  ['04', 'Упаковка', '#packaging'],
  ['05', 'Будущее', '#future'],
]

const features = [
  { icon: Wrench, number: '01', title: 'Ремонт без хаоса', text: 'Опишите задачу один раз, получите предложения проверенных соседями мастеров и сравните цену, сроки и состав работ.' },
  { icon: PackageOpen, number: '02', title: 'Вторая жизнь вещей', text: 'Остатки плитки, мебель, техника и инструмент находят нового владельца внутри дома, пока они ещё нужны.' },
  { icon: MessageCircle, number: '03', title: 'Свои люди рядом', text: 'Контекстные диалоги вместо случайных чатов. Обсуждайте заказ или передачу, не раскрывая личные данные заранее.' },
  { icon: CircleDollarSign, number: '04', title: 'Экономика участия', text: 'LoftCoins возвращают ценность тем, кто помогает сообществу: рекомендует мастера, делится опытом и приглашает соседей.' },
]

const steps = [
  ['01', 'Открываете N-Ice Loft', 'Ваш дом уже собран внутри: люди, полезные контакты, вещи и локальные сценарии.'],
  ['02', 'Решаете бытовую задачу', 'Найти плиточника, отдать краску, спросить соседа или начать ремонт — в два-три нажатия.'],
  ['03', 'Получаете пользу обратно', 'Меньше поиска и риска, больше доверия, экономии и понятных договорённостей.'],
]

const audience = [
  ['Жителям с ремонтом', 'От идеи до принятой работы: задача, предложения, заказ и отзыв.'],
  ['Тем, кто обустраивает дом', 'Продайте или отдайте то, что осталось после переезда и ремонта.'],
  ['Активным соседям', 'Помогайте другим, собирайте репутацию и получайте LoftCoins.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothTouch: false })
    let rafId
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(rafId); lenis.destroy() }
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="N-Ice Loft">N<span>·</span>ICE LOFT</a>
        <nav className={`topnav ${menuOpen ? 'is-open' : ''}`} aria-label="Разделы презентации">
          {nav.map(([number, label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}><small>{number}</small>{label}</a>)}
        </nav>
        <a className="top-cta" href="https://niceloft-resident-app.pages.dev/">Открыть приложение <ArrowUpRight /></a>
        <button className="menu-button" type="button" aria-label="Открыть меню" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>Личная инфраструктура жителей</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1 }}>Дом, который<br /><em>работает на вас.</em></motion.h1>
            <motion.p className="hero-lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .25 }}>N-Ice Loft соединяет жителей одного дома в понятную цифровую среду: ремонт, вещи, мастера, общение и взаимная польза — без посредников и лишнего шума.</motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .4 }}>
              <a className="button button-primary" href="https://niceloft-resident-app.pages.dev/">Попробовать N-Ice Loft <ArrowRight /></a>
              <a className="text-link" href="#why">Посмотреть идею <ArrowDown /></a>
            </motion.div>
            <div className="hero-note"><span className="live-dot" /> Сделано для жителей, а не для отчётности</div>
          </div>

          <motion.div className="hero-stage" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .2 }}>
            <div className="orbital orbital-one" /><div className="orbital orbital-two" />
            <div className="phone-shadow" />
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-top"><span>09:41</span><span>● ◔ ▪</span></div>
              <div className="phone-body">
                <p className="phone-kicker">N-ICE LOFT</p>
                <h2>Добрый вечер,<br /><strong>Виталий</strong></h2>
                <p className="phone-muted">Кв. 128 · доступ подтверждён</p>
                <div className="wallet-mini"><span>Доступно</span><strong>410 <i>LC</i></strong><small>50 LC ожидают проверки</small><div className="wallet-rule" /><div className="wallet-stats"><b>2 <small>задачи</small></b><b>1 <small>пропуск</small></b><b>2 <small>приглашено</small></b></div></div>
                <div className="phone-section-title"><b>Быстрые действия</b><small>N-Ice Loft</small></div>
                <div className="quick-grid"><div><Wrench /><b>Ремонт</b><small>Получить цены мастеров</small></div><div><PackageOpen /><b>Витрина</b><small>Вещи для соседей</small></div><div><MessageCircle /><b>Чат дома</b><small>Свои люди рядом</small></div><div><Briefcase /><b>Мастера</b><small>Проверенные контакты</small></div></div>
              </div>
              <div className="phone-nav"><Home /><PackageOpen /><Briefcase /><Users /><MessageCircle /><span className="active-nav"><Users /></span></div>
            </div>
            <div className="float-card float-card-top"><BadgeCheck /><span>Житель подтверждён</span></div>
            <div className="float-card float-card-bottom"><Star /><span>4.9 · соседи рекомендуют</span></div>
          </motion.div>
        </section>

        <section className="manifesto section" id="why">
          <div className="section-intro"><p className="eyebrow">Почему это нужно</p><h2>Обычные задачи<br /><em>не должны быть сложными.</em></h2></div>
          <div className="manifesto-copy"><p>После ремонта остаются вещи. Перед ремонтом нужны люди. В новом доме хочется понимать, кому можно доверять, а не начинать поиск с нуля.</p><p>N-Ice Loft превращает дом из адреса в живую сеть взаимной помощи — с понятными правилами, контекстом и уважением к приватности.</p><a className="text-link" href="#scenarios">Как это работает <ArrowRight /></a></div>
        </section>

        <section className="feature-section section" id="scenarios">
          <div className="section-kicker"><p className="eyebrow">Четыре опоры</p><span>01 — 04</span></div>
          <div className="feature-list">{features.map(({ icon: Icon, number, title, text }) => <motion.article className="feature-row" key={number} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .5 }}><span className="feature-number">{number}</span><div className="feature-icon"><Icon /></div><h3>{title}</h3><p>{text}</p><ChevronRight className="feature-arrow" /></motion.article>)}</div>
        </section>

        <section className="journey section">
          <div className="journey-head"><p className="eyebrow">Один дом — один контекст</p><h2>От запроса<br /><em>до результата.</em></h2></div>
          <div className="steps">{steps.map(([number, title, text]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        </section>

        <section className="audience section" id="audience">
        <div className="audience-main"><p className="eyebrow">Для кого</p><h2>Если вы живёте <br /> в доме — <em>это для вас.</em></h2><p className="audience-lede">Неважно, владеете вы квартирой или снимаете её. Важно, что ваши самые полезные связи уже находятся рядом.</p><a className="button button-primary" href="https://niceloft-resident-app.pages.dev/">Зайти в свой дом <ArrowRight /></a></div>
          <div className="audience-list">{audience.map(([title, text], i) => <div className="audience-item" key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        </section>

        <section className="packaging section" id="packaging"><div className="packaging-head"><p className="eyebrow">Как упаковать продукт</p><h2>Не ещё один чат.<br /><em>Свой слой дома.</em></h2><p>N-Ice Loft лучше объяснять через первую полезную задачу, а не через список функций. Житель приходит за решением — и остаётся из-за доверия и связей.</p></div><div className="packaging-grid"><div><span>01</span><h3>Личный экран дома</h3><p>Не лента и не кабинет УК. Это стартовая точка жителя: баланс, задачи, люди и вещи именно его дома.</p></div><div><span>02</span><h3>Решение за 2–3 нажатия</h3><p>Ремонт, продажа остатков, рекомендация мастера или приватный чат начинаются с конкретного действия.</p></div><div><span>03</span><h3>Сетевой эффект соседей</h3><p>Каждый новый полезный участник делает выбор следующего жителя быстрее, безопаснее и выгоднее.</p></div></div></section>

        <section className="trust section"><div className="trust-mark"><ShieldCheck /></div><div><p className="eyebrow">Доверие по умолчанию</p><h2>Ваши данные —<br /><em>ваша территория.</em></h2><p>N-Ice Loft показывает только то, что нужно для конкретного действия. Номер квартиры и телефон не раскрываются без согласия. Сделки происходят между жителями, а не через платформу.</p></div><div className="trust-points"><span><Check /> Общий контекст ЖК</span><span><Check /> Приватные диалоги</span><span><Check /> Подтверждённые отзывы</span></div></section>

        <section className="closing section" id="future"><p className="eyebrow">Новая норма соседства</p><h2>Меньше поиска.<br /><em>Больше своего.</em></h2><p>Начните с одной задачи. Остальное появится, когда дом начнёт работать как сообщество.</p><a className="button button-primary" href="https://niceloft-resident-app.pages.dev/">Открыть N-Ice Loft <ArrowRight /></a></section>
      </main>

      <footer className="footer"><span>© 2026 N-Ice Loft</span><span>Продукт для жителей</span><a href="#top">Наверх <ArrowUpRight /></a></footer>
    </div>
  )
}

function ArrowUpRight() { return <ArrowRight className="arrow-up-right" /> }

export default App
