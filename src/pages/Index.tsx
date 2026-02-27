import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-24T00:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Анна К.",
      role: "Психолог",
      text: "После ПОРТАЛА я наконец увидела, почему застряла. Это не про мотивацию — это про реальное изменение состояния. Впервые за год почувствовала, что снова могу двигаться.",
      result: "Вернула энергию и ясность"
    },
    {
      name: "Елена М.",
      role: "Коуч",
      text: "Думала, что просто устала. Оказалось — несу с собой программы, которые давно не мои. После практик стало легче дышать, появилось пространство для новых решений.",
      result: "Освободилась от чужих сценариев"
    },
    {
      name: "Ирина П.",
      role: "Энергопрактик",
      text: "Работа была точной и глубокой. Никакой воды — только то, что действительно нужно для перехода. Я поняла свой следующий шаг и приняла решение без страха.",
      result: "Получила внутреннюю опору"
    }
  ];

  const programDays = [
    {
      emoji: "🔥",
      date: "24 марта",
      title: "День 1 — ДИАГНОСТИКА",
      subtitle: "Где вы остановились и почему усилия не дают скачка.",
      content: [
        "выявление повторяющегося сценария",
        "диагностика внутреннего потолка",
        "понимание своей текущей роли",
        "Глубокая практика + энерговибрационный сеанс."
      ],
      results: [
        "появляется ясность вместо хаоса",
        "вы понимаете, где именно тормозите себя",
        "уходит иллюзия «просто не повезло»",
        "вы видите реальную точку ограничения"
      ],
      outcome: "Вы перестаёте обвинять обстоятельства. Фокус возвращается к вам. Появляется ощущение контроля над траекторией."
    },
    {
      emoji: "🌑",
      date: "25 марта",
      title: "День 2 — ОСВОБОЖДЕНИЕ",
      subtitle: "Что удерживает вас на прежнем уровне.",
      content: [
        "внутренние запреты на деньги",
        "страх проявления",
        "страх ответственности",
        "зависимость от одобрения",
        "накопленное эмоциональное напряжение",
        "практика-медитация + энерговибрационный сеанс."
      ],
      results: [
        "снижается внутреннее сжатие",
        "уходит часть страха проявления",
        "появляется ощущение силы",
        "возвращается ресурс"
      ],
      outcome: "Вы перестаёте сжиматься перед возможностями. Начинаете чувствовать: «я могу больше»."
    },
    {
      emoji: "🔮",
      date: "26 марта",
      title: "День 3 — ПЕРЕХОД",
      subtitle: "Формирование новой внутренней позиции.",
      content: [
        "проживание состояния более масштабной версии себя",
        "фиксация нового уровня",
        "понимание следующего шага",
        "принятие решения",
        "Практика закрепления + энерговибрационный сеанс."
      ],
      results: [
        "появляется внутренняя опора",
        "исчезает ощущение потерянности",
        "приходит спокойная готовность действовать",
        "вы чётко понимаете, куда идти дальше"
      ],
      outcome: "Вы выходите из режима «застрял». Вы входите в режим выбора."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">🔮 ПОРТАЛ</div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О марафоне</button>
              <button onClick={() => scrollToSection('program')} className="hover:text-primary transition-colors">Программа</button>
              <button onClick={() => scrollToSection('authors')} className="hover:text-primary transition-colors">Авторы</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">Отзывы</button>

            </div>
            <Button onClick={() => window.open('https://t.me/+X_fIDkDLb3EzNzBi', '_blank')} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Хочу участвовать
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-6xl mb-6 animate-fade-in">🔮</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-balance">
            ПОРТАЛ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/70 animate-fade-in delay-100 max-w-3xl mx-auto">
            Бесплатный онлайн-марафон перехода на следующий уровень жизни и реализации
          </p>
          <p className="text-lg md:text-xl mb-12 animate-fade-in delay-200 max-w-2xl mx-auto">
            Перестать застревать. Собрать себя. Понять, куда идти дальше.
          </p>
          
          <div className="bg-secondary text-secondary-foreground rounded-lg p-8 mb-12 animate-fade-in delay-300">
            <p className="text-lg mb-6">До старта марафона осталось:</p>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div>
                <div className="text-4xl font-bold text-primary">{timeLeft.days}</div>
                <div className="text-sm mt-1">дней</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">{timeLeft.hours}</div>
                <div className="text-sm mt-1">часов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">{timeLeft.minutes}</div>
                <div className="text-sm mt-1">минут</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">{timeLeft.seconds}</div>
                <div className="text-sm mt-1">секунд</div>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => window.open('https://t.me/+X_fIDkDLb3EzNzBi', '_blank')}
          >
            Хочу участвовать
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">КОМУ ПОДОЙДЁТ ЭТОТ МАРАФОН</h2>
          <p className="text-xl mb-8 text-center text-muted-foreground">Этот формат для вас, если вы:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "эксперт, коуч, психолог, энергопрактик, наставник",
              "много работали над собой, но внутри стало пусто",
              "устали жить на силе воли и «держаться»",
              "застряли в деньгах, клиентах или реализации",
              "боитесь проявления, ответственности, нового уровня",
              "находитесь в кризисе смысла, отношений или жизненного пути"
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6 flex items-start gap-4">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4 text-lg">
            <p className="font-semibold">Вы уже не в начале пути.</p>
            <p className="text-muted-foreground">Но привычные инструменты перестали давать результат.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">КАКОЙ РЕЗУЛЬТАТ ВЫ ПОЛУЧИТЕ</h2>
          
          <div className="space-y-6">
            {[
              "увидите реальную причину застревания, а не симптомы",
              "снизите внутреннее напряжение и ощущение хаоса",
              "вернёте чувство опоры и целостности",
              "почувствуете ресурс вместо хронической усталости",
              "поймёте, какой шаг вам действительно нужен дальше"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                  {index + 1}
                </div>
                <p className="text-lg pt-1">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-secondary/20 rounded-lg text-center border-4 border-[#FF2B2B]">
            <p className="text-lg">
              Без обещаний «лёгких изменений».<br />
              Но с реальным сдвигом состояния, который ощущается телом и решениями.
            </p>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">ПРОГРАММА 24–25–26 МАРТА</h2>
          
          <div className="space-y-8">
            {programDays.map((day, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">{day.emoji}</div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-primary mb-1">{day.date}</div>
                      <h3 className="text-2xl font-bold mb-2">{day.title}</h3>
                      <p className="text-lg text-muted-foreground mb-4">{day.subtitle}</p>
                      <ul className="space-y-1 mb-6">
                        {day.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-primary/10 rounded-lg p-4 mb-4">
                        <p className="font-semibold mb-2">🔥 Результат {index + 1} дня</p>
                        <ul className="space-y-1">
                          {day.results.map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">—</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <p className="text-sm font-semibold mb-1">К чему это приводит</p>
                        <p className="text-muted-foreground">{day.outcome}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="authors" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">ПОЧЕМУ С НАМИ</h2>
          
          <div className="mb-12 flex justify-center">
            <img 
              src="https://cdn.poehali.dev/projects/abf352d4-79da-4b58-b2f2-a0469ff33b8a/bucket/a64d565b-6bb7-4384-8692-8b6ebddbd338.png" 
              alt="Элла и Елена" 
              className="rounded-lg shadow-xl max-w-2xl w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Элла</h3>
                <p className="text-muted-foreground mb-4">
                  Целитель, энергопроводник, ченнеллер.
                </p>
                <p className="leading-relaxed">
                  Работает с кармическими узлами, повторяющимися сценариями, деструктивными программами и сборкой целостности (Высшее Я — Душа — Тело). Помогает удерживать новый уровень состояния и реализации.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Елена</h3>
                <p className="text-muted-foreground mb-4">
                  Мастер Рей Ки До Сатори, целитель, регрессолог.
                </p>
                <p className="leading-relaxed">
                  Специалист по глубинному очищению, родовым программам и состояниям кризиса и истощения. Проводит практики и медитации, которые мягко, но точно запускают внутренние изменения.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center text-lg">
            <p className="font-semibold">Мы не мотивируем и не уговариваем.</p>
            <p className="text-muted-foreground mt-2">Мы работаем с переходами, когда человек готов идти дальше.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">ОТЗЫВЫ УЧАСТНИКОВ</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://cdn.poehali.dev/projects/abf352d4-79da-4b58-b2f2-a0469ff33b8a/bucket/e93cf2b8-1a52-4b9e-a393-d8e22bc601cf.png",
              "https://cdn.poehali.dev/projects/abf352d4-79da-4b58-b2f2-a0469ff33b8a/bucket/b1606b0a-b881-4faf-98d7-77e702f3a208.png",
              "https://cdn.poehali.dev/projects/abf352d4-79da-4b58-b2f2-a0469ff33b8a/bucket/676653e9-a8fa-4bad-ba49-ebe420674c9f.png"
            ].map((url, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={url} alt={`Отзыв участницы ${i + 1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            ПОРТАЛ — для тех, кто уже прошёл часть пути
          </h2>
          <p className="text-xl mb-6">
            и оказался в точке, где по-старому больше не работает.
          </p>
          <p className="text-lg mb-12">
            Если вы чувствуете застревание и готовы честно посмотреть на свой следующий шаг —<br />
            ПОРТАЛ может стать началом этого перехода.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 bg-background text-foreground border-2 border-background hover:bg-background/90"
            onClick={() => window.open('https://t.me/+X_fIDkDLb3EzNzBi', '_blank')}
          >
            Хочу участвовать
          </Button>
        </div>
      </section>

      <footer id="contacts" className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-xl mb-4">🔮 ПОРТАЛ</h3>
              <p className="text-muted-foreground">Марафон перехода на следующий уровень</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <a href="https://t.me/voroshilinaella" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-2">
                <Icon name="Send" size={20} />
                <span>Telegram: @voroshilinaella</span>
              </a>
              <a href="mailto:voroshilina.ru@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
                <span>Email: voroshilina.ru@gmail.com</span>
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Дата</h4>
              <p className="text-muted-foreground">Старт: 24 марта 2026</p>
              <p className="text-muted-foreground">Длительность: 3 дня</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2026 ПОРТАЛ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;