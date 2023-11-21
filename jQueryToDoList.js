$(document).ready(function() {
  /**
   * Toggles "done" class on <li> element
   */
  $('ul').on('click', 'li', function() {
    const $item = $(this);
    $item.toggleClass('done');
  });

  /**
   * Delete element when delete link clicked
   */
  function deleteToDoList() {
    $('.delete').on('click', function() {
      const $parent = $(this).parent();
        $(this).parent().css("display", "none");
    });
  }

  /**
   * Adds new list item to <ul>
   */
  function addListItem(e) {
    e.preventDefault();
    const $input = $(this).parent().find('input');
    const text = $input.val();

    if (text !== '') {
      const $spanNewItem = $('<span>');
      const $newLi = $('<li>');
      $spanNewItem.append($('<span>').text(text));
      const $ancDelete = $('<a>');
      $ancDelete.addClass('delete');
      $ancDelete.text('Delete');
      $newLi.append($spanNewItem, $ancDelete);

      const $ulist = $('ul');
      $ulist.append($newLi);
      deleteToDoList();
      console.log($ulist);
    }
  }

  $("a:eq(0)").on('click', deleteToDoList);
  $("a:eq(1)").on('click', deleteToDoList);
  $("a:eq(2)").on('click', addListItem);
});