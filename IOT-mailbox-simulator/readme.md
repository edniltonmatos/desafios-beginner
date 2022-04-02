# IOT Mailbox Simulator

**Tier:** 1-Beginner

O objetivo do IOT Mailbox Simulator é imitar como uma Internet das Coisas
A caixa de correio física habilitada (IOT) pode ser usada para notificá-lo quando o correio "caracol"
chegou. Ao fazer isso, ele fornecerá experiência no uso de retornos de chamada
para comunicar o estado entre diferentes componentes de um aplicativo que são dependentes
um no outro.

### Requirements & Constraints

- Mesmo que este aplicativo seja especificado usando conceitos e terminologia Javascript
você é livre para implementá-lo no idioma de sua escolha.

- A seguinte classe Javascript é fornecida para iniciar e parar o monitoramento
processo e sinalizar a página da Web do aplicativo com o estado da porta da caixa de correio
(aberto ou fechado) em intervalos predefinidos. Lembre-se de que o intervalo especificado
não deve exceder o tempo que normalmente leva para abrir ou fechar a porta ou você
pode perder uma entrega!
```
/**
 * Monitor the light levels inside an IOT enabled snail mailbox to detect
 * when the mailbox door has been opened and closed.
 * @class IOTMailbox
 */
class IOTMailbox {
  /**
   * Creates an instance of IOTMailbox.
   * @param {number} [signalInterval=500] Timer interval for checking mailbox status.
   * @param {function} signalCallback Function to invoke when the timer interval expires.
   * @memberof IOTMailbox
   */
  constructor(signalInterval = 500, signalCallback) {
    this.signalInterval = signalInterval;
    this.signalCallback = signalCallback;
    this.intervalID = null;
    this.lastLightLevel = 0;
  }

  /**
   * Start monitoring of the mailbox and invoke the caller specified callback
   * function when the interval expires.
   * @memberof IOTMailbox
   */
  startMonitoring = () => {
    console.log(`Starting monitoring of mailbox...`);
    this.intervalID = window.setInterval(this.signalStateChange, this.signalInterval);
  }

  /**
   * Stop monitoring the mailbox status
   * @memberof IOTMailbox
   */
  stopMonitoring = () => {
    if (this.intervalID === null) return;
    window.clearInterval(this.intervalID);
    this.intervalID = null;
    console.log(`Mailbox monitoring stopped...`);
  }

  /**
   * Pass the current light level inside the mailbox to the users callback
   * function. The positive light levels indicate the door is open while 
   * negative levels indicate it is closed. Depending on the sampling interval 
   * the mailbox door could be in any postion from fully closed to fully open. 
   * This means the light level varies from interval-to-interval.
   * @memberof IOTMailbox
   */
  signalStateChange = () => {
    const lightLevel = this.lastLightLevel >= 0 
      ? Math.random().toFixed(2) * -1 
      : Math.random().toFixed(2);
    console.log(`Mailbox state changed - lightLevel: ${lightLevel}`);
    this.signalCallback(this.lightLevel);
    this.lastLightLevel = lightLevel;
  }
};
```

## User Stories

-   [ ] O usuário pode ver uma página da web contendo um painel de controle contendo três
botões - 'Start Monitoring', 'Stop Monitoring', and 'Reset'.
-   [ ] O usuário pode ver um painel de notificação onde o status da caixa de correio será postado.
-   [ ] O usuário pode ver um painel de log rolável onde os detalhes da execução descrevem
a operação dos aplicativos e a interface com a instância IOTMailbox serão postadas.
-   [ ] O usuário pode clicar no botão 'Iniciar monitoramento' para começar a receber o estado
notificações da caixa de correio.
-   [ ] O usuário pode ver uma mensagem adicionada ao painel de log quando o monitoramento é iniciado.
-   [ ] O usuário pode ver uma mensagem adicionada ao painel de log para o nível de luz passado
através da função de retorno de chamada. Isso deve incluir o nível de luz numérico
e se a porta está aberta ou fechada.
-   [ ] O usuário pode ver uma mensagem adicionada ao painel de notificação quando a porta
foi aberto.
-   [ ] O usuário pode clicar no botão 'Stop Monitoring' para parar de receber o estado
notificações da caixa de correio.
-   [ ] O usuário pode ver uma mensagem adicionada ao painel de log quando o monitoramento parar.

## Bonus features

-   [ ] User can see the 'Start Monitoring' button disabled until monitoring is
stopped.
-   [ ] User can see the 'Stop Monitoring' button disabled until monitoring is
started.
-   [ ] User can see an field in the control panel allowing the length of the
monitoring interval to be specified. 
-   [ ] User can see a message added to the notification panel if the door is
left open.
-   [ ] User can hear an audible alert when the door is opened.

## Useful links and resources

- [Snail Mail (Wikipedia)](https://en.wikipedia.org/wiki/Snail_mail)
- [Internet of Things (Wikipedia)](https://en.wikipedia.org/wiki/Internet_of_things)
- [IOT Mailbox: An Introduction](https://iotexpert.com/2018/08/13/iot-mailbox-an-introduction/)
- [What the Heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
- [window.setInterval (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

## Example projects

N/a