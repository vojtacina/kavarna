export default async (req, res) => {


    const {
        query: {username},
    } = req


    const response = await fetch('https://www.instagram.com/'+username+'/?__a=1');
    const data =  await response.json();

    if (data) {
        const full_name = data['graphql']['user']['full_name'];
        const first_name = full_name.substr(0, full_name.indexOf(" "));

        const photo_url = data['graphql']['user']['profile_pic_url'];

        res.json({
            "first name": first_name,
            "photo_url": photo_url
        });
    }
    else {
        res.json({
            "error": "Invalid username",
        });
    }




}