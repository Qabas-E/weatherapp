  class Fetch {
  async getCurrent(input) {
    const myKey = "0b982a7983ffdb7bfeb00024f3ca45b6";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
