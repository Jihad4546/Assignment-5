
1. var দিয়ে variable পুনরায় declare এবং update করা যায়।এটি hoisting করে, তাই declare করার আগেও call করলে undefined দেখাতে পারে। তাই এইটা মর্ডান Es6 কম ব্যবহার হয় ।
   
  let এটি block scoped  { } এর ভিতরে কাজ করে । et দিয়ে variable update করা যায়, কিন্তু একই scope এ পুনরায় declare করা যায় । কোন ভেরিএবল পর্রিবতন করতে হলে let ব্যবহার করা হয় । 
  
  const এটিও block scoped। const দিয়ে declare করা variable এর value পরিবর্তন করা যায় না এবং যেসব value পরিবর্তন হবে না সেগুলোর জন্য const ব্যবহার করা হয়।


2. spread operator (...) যা কোনো array বা object এর element গুলোকে আলাদা করে ছড়িয়ে দিতে . array কপি করতে পারে
   ‍Array বা Object merge করতে । Function এ multiple argument পাঠাতে;

3. map(), filter(), এবং forEach() হলো JavaScript এর array method, যেগুলো array এর প্রতিটি element এর উপর কাজ করার জন্য ব্যবহার করা হয়। তবে তাদের কাজ আলাদা।

4. Arrow Function হলো JavaScript এ ছোট করে function লেখার একটি পদ্ধতি।

5.   Template Literals হলো যার মাধ্যমে আমরা string সহজভাবে লিখতে এবং variable ব্যবহার করতে পারি।
