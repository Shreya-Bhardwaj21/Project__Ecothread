function postTopic() {
    const forumTopic = document.getElementById('forumTopic').value;
    
    if (forumTopic.trim() === '') {
        alert('Please enter a topic to post.');
        return;
    }

    // Example of posting a topic (In a real application, this would involve sending data to a server)
    alert('New topic posted:\n' + forumTopic);

    // Clear the textarea
    document.getElementById('forumTopic').value = '';
}