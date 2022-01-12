module.exports = {

    run(message) {
      
        const input = message.content.toLowerCase();
        let role = "";
        
        switch (input) {
            case "events": role = "events_id_goes_here"; break;
            default:
                message.reply('please enter one of the assignable roles mentioned in the post above.')
                .then(msg => { msg.delete({timeout:10000}) }) // Delete reply after 10 seconds.
                .catch();
                message.delete(); // Delete the user's message.
                return;
        }
    
        if (message.member.roles.cache.has(role)) {
            message.member.roles.remove(role);
        }
        else {
            message.member.roles.add(role);
        }
    
        message.delete(); // Delete the user's message.
    
    }

}
