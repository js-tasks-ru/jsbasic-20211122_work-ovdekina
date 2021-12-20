function makeFriendsList(friends) {
  const list = document.createElement('UL');
  const arr = friends.map(item => [item.firstName, item.lastName].join(' '));

  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('LI');
    li.innerText = arr[i]
    list.appendChild(li);
  }
  return list;
}

