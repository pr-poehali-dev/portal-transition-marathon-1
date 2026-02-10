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
    const targetDate = new Date('2026-02-12T00:00:00').getTime();
    
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
      title: "День 1 — Диагностика",
      subtitle: "Где вы застряли",
      content: "Мы определяем реальную причину застревания — не на уровне мыслей, а на уровне состояния и энергии.",
      result: "Появляется ясность и понимание корня проблемы. Уходит ощущение хаоса."
    },
    {
      emoji: "🌑",
      title: "День 2 — Очищение",
      subtitle: "Что больше не должно идти с вами",
      content: "Работа с деструктивными программами, накопленным напряжением и старыми внутренними сценариями.",
      result: "Становится легче, уходит внутренний груз. Появляется ощущение пространства."
    },
    {
      emoji: "🌱",
      title: "День 3 — Восстановление",
      subtitle: "Возврат ресурса",
      content: "Возвращаем энергию, потраченную на выживание, удерживание и чужие ожидания.",
      result: "Появляется ресурс, спокойствие и устойчивость. Состояние «я снова в себе»."
    },
    {
      emoji: "✨",
      title: "День 4 — Переход",
      subtitle: "Что мешает сделать шаг",
      content: "Работа со страхом проявления, ответственности и новой версии себя.",
      result: "Появляется готовность к изменениям. Страх сменяется ощущением возможности."
    },
    {
      emoji: "🔮",
      title: "День 5 — Портал",
      subtitle: "Выбор и вход",
      content: "Фиксация нового состояния и осознание следующего этапа. Вы принимаете решение.",
      result: "Чёткое понимание следующего шага и ощущение внутренней опоры."
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

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-6xl mb-6 animate-fade-in">🔮</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-balance">
            ПОРТАЛ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in delay-100 max-w-3xl mx-auto">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">ПРОГРАММА МАРАФОНА</h2>
          
          <div className="space-y-8">
            {programDays.map((day, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">{day.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{day.title}</h3>
                      <p className="text-xl text-primary mb-4">{day.subtitle}</p>
                      <p className="text-lg mb-4 text-muted-foreground">{day.content}</p>
                      <div className="bg-primary/10 rounded-lg p-4">
                        <p className="font-semibold mb-2">Результат:</p>
                        <p>{day.result}</p>
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                    <div className="bg-primary/10 rounded px-3 py-2 inline-block">
                      <p className="text-sm font-semibold text-primary">{testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              <a href="https://t.me/voroshilinaella" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors mb-2">
                Telegram: @voroshilinaella
              </a>
              <a href="mailto:voroshilina.ru@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">
                Email: voroshilina.ru@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Дата</h4>
              <p className="text-muted-foreground">Старт: 12 февраля 2026</p>
              <p className="text-muted-foreground">Длительность: 5 дней</p>
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