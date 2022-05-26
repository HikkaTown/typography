const sendmail = require("sendmail")();
export default function handler(req, res) {
  let theme = req.body?.theme ? req.body.theme : null;
  let address = req.body?.address
    ? `Адресс доставки: ${req.body?.address}`
    : null;
  let totalPrice = req.body?.totalPrice
    ? `Общая сумма: ${req.body?.totalPrice}`
    : null;
  let name = `Имя: ${req.body?.name}`;
  let commentary = req.body?.comentary
    ? `Комментарий: ${req.body?.comentary}`
    : null;
  let email = `Email: ${req.body?.email ? req.body.email : "Без почты"}`;
  let office = req.body?.office?.address
    ? `Офис: ${req.body.office.address}`
    : null;
  let phone = `Телефон: ${req.body?.phone}`;
  let firstStep = req.body?.firstStep
    ? `Товар: ${req.body?.firstStep.name}, цена: ${req.body.firstStep.price}`
    : null;
  let secondStep = req.body?.secondStep
    ? `Товар ${req.body?.secondStep.name}, ${
        req.body.secondStep?.category
          ? `категория: ${req.body.secondStep?.category}`
          : ""
      }, цена: ${req.body.secondStep.price}`
    : null;
  let ogrn = req.body?.ogrn ? `ОГРН: ${req.body.ogrn}` : null;
  let corp_name = req.body?.corp_name
    ? `Название компании: ${req.body.corp_name}`
    : null;

  try {
    const mailData = {
      from: "no-reply@1ppc.ru",
      to: req.body?.emailOffice.email,
      subject: `Заявка с сайта Первый печатный`,
      text: "Данные заказа",
      html: "",
      attachments: req.body?.file ? [{ path: req.body.file }] : "",
    };
    mailData.html = `
    ${theme ? `<p>Тема письма: ${theme}</p>` : "<p>Обратная связь</p>"}
    ${name ? `<p>${name}</p>` : ""}
    ${phone ? `<p>${phone}</p>` : ""}
    <p>${email}</p>
    ${commentary ? `<p>${commentary}</p>` : ""}
    ${office ? `<p>${office}</p>` : ""}
    ${firstStep ? `<p>${firstStep}</p>` : ""}
    ${secondStep ? `<p>${secondStep}</p>` : ""}
    ${ogrn ? `<p>${ogrn}</p>` : ""}
    ${corp_name ? `<p>${corp_name}</p>` : ""}
    ${address ? `<p>${address}</p>` : ""}
    ${totalPrice ? `<p>${totalPrice}</p>` : ""}
    `;
    sendmail(mailData, function (err, reply) {
      return res.status(400).json({ success: false });
    });
    return res.status(200).json({ success: true });
  } catch {
    console.log("Some error");
    return res.status(400).json({ success: false });
  }
}
