var navList, firstItem, link;

navList = $('nav-list');// your code goes here!

firstItem = navList.children().first();
link = firstItem.find('a');

link.attr('href', '#1');
