import React from 'react';

const Form = () => {
  return (
    <section className="max-w-screen-md mx-auto p-8">
      <h2 className="text-center text-3xl font-weight-semibold mb-8">お問い合わせ</h2>
      <div>
        <form method="post" action="#">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid grid-cols-1 sm:grid-cols-4 mb-4">
            <label for="name" className="block">名前</label>
            <input type="text" name="name" id="name" className="p-2 col-span-3 block border rounded-md border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-500 focus:outline-none duration-300" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 mb-4">
            <label>メールアドレス</label>
            <input type="email" name="email" id="email" className="p-2 col-span-3 block border rounded-md border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-500 focus:outline-none duration-300" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 mb-4">
            <label for="message">
              問い合わせ内容
            </label>
            <textarea name="message" id="message" rows="5" className="p-2 col-span-3 block border rounded-md border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-500 focus:outline-none duration-300" />
          </div>
          <button type="submit" class="block ml-auto py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300">送信</button>
          {/* <input type="reset" value="Clear" /> */}
        </form>
      </div>
    </section>
  )
}

export default Form