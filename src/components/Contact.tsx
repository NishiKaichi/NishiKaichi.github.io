import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ご質問などがありましたら，お気軽にご連絡ください．
            多くの方との交流を楽しみにしています！
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <a 
                href="mailto:nishikaichi.28work@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-600">nishikaichi.28work@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://github.com/NishiKaichi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-gray-800 hover:bg-gray-50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Github className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-gray-600">@NishiKaichi</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-700 hover:bg-blue-50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-gray-600">Connect with me</div>
                </div>
              </a>

              <a 
                href="https://x.com/syaf_wantjob"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <Twitter className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <div className="font-semibold">Twitter</div>
                  <div className="text-sm text-gray-600">@syaf_wantjob</div>
                </div>
              </a>
            </div>

            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                ご質問やご依頼がありましたら、お気軽にご連絡ください。
              </p>
              <Button size="lg" asChild>
                <a href="mailto:nishikaichi.28work@gmail.com">
                  <Mail className="mr-2 w-4 h-4" />
                  Send me an email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
