const filters = {
  title: 'Фильтры',
  submit_button: 'Применить',
  form: {
    private_type: {
      title: 'Приватность группы',
      any: 'Любая',
      public: 'Публичная',
      private: 'Приватная',
    },
    avatar_color: {
      title: 'Цвет аватара',
      red: 'Красный',
      green: 'Зелёный',
      yellow: 'Жёлтый',
      blue: 'Синий',
      purple: 'Фиолетовый',
      white: 'Белый',
      undefined: 'Без цвета',
    },
    friends_in_group: {
      title: 'Наличие общих друзей в группе',
      any: 'Без разницы',
      with_friends: 'Присутствуют',
      without_friends: 'Отсутствуют',
    },
  },
};

export const groups = {
  header: 'Список групп',
  members: {
    t_one: '{{count}} подписчик',
    t_few: '{{count}} подписчика',
    t_many: '{{count}} подписчиков',
  },
  friends: {
    t_one: '{{count}} общий друг',
    t_few: '{{count}} общих друга',
    t_many: '{{count}} общих друзей',
  },
  visibility: {
    public: 'Открытая группа',
    private: 'Закрытая группа',
  },
  friends_modal: {
    title: 'Друзья в сообществе',
  },
  filters,
};
