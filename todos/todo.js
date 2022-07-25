window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const listing_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_element = document.createElement('div');
		task_element.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_element.appendChild(task_content_el);

		const input_ele = document.createElement('input');
		input_ele.classList.add('text');
		input_ele.type = 'text';
		input_ele.value = task;
		input_ele.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(input_ele);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const edit_ele = document.createElement('button');
		edit_ele.classList.add('edit');
		edit_ele.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(edit_ele);
		task_actions_el.appendChild(task_delete_el);

		task_element.appendChild(task_actions_el);

		listing_el.appendChild(task_element);

		input.value = '';

		edit_ele.addEventListener('click', (e) => {
			if (edit_ele.innerText.toLowerCase() == "edit") {
				edit_ele.innerText = "Save";
				input_ele.removeAttribute("readonly");
				input_ele.focus();
			} else {
				edit_ele.innerText = "Edit";
				input_ele.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			listing_el.removeChild(task_element);
		});
	});
});