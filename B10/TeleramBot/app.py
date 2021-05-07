import telebot

TOKEN = "1743362233:AAFsrGc1lqIVZPx8Po9Ncx1TTqMm8KItaP0"

bot = telebot.TeleBot(TOKEN)


@bot.message_handler(content_types=['voice', ])
def repeat(message: telebot.types.Message):
    bot.send_message(message.chat.id, 'У тебя красивый голос!')


# Обрабатываются все сообщения содержащие команды '/start' or '/help'.
# @bot.message_handler(commands=['start', 'help'])
# def handle_start_help(message):
#     pass


# Обрабатывается все документы и аудиозаписи
@bot.message_handler(content_types=['document', 'audio'])
def handle_docs_audio(message):
    pass


@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
    bot.send_message(message.chat.id, f"Welcome, \ c{message.chat.username}")


@bot.message_handler(content_types=['photo', ])
def say_lmao(message: telebot.types.Message):
    bot.reply_to(message, 'Nice meme XDD')


bot.polling(none_stop=True)
