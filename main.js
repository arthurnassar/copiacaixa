// templates
const templatePlanos = ` <div id="planos-proposta"
style="margin-top: 25px; background-color: white; padding: 30px; width: 100%;">
<div id="topdiv"
    style="border-bottom: 1px dashed grey; padding-bottom: 15px; display: flex; justify-content: space-between;">
    <div id="plantopdiv"
        style="display: flex; align-items: center; gap: 10px; width: fit-content;">
        <img src="./assets/File Alt.png" alt="file">
        <p style="color:#005CA9; margin-bottom: 0;">Planos</p>
    </div>
    <img onclick="deleteScreenElement()" style="height: 10px; width: 10px;"
        src="./assets/Times.png" alt="x icon">
</div>
<div class="owl-carousel owl-theme" style="width: 100%; margin: auto;">
    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(0)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
                    <div class="assinar-btn"
                        style="padding: 9px 16px; background: #F39200; color: white; font-weight: 700; border-radius: 4px;">
                        <p style="margin-bottom: 0;">Assinar plano</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(1)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
                    <div class="assinar-btn"
                        style="padding: 9px 16px; background: #F39200; color: white; font-weight: 700; border-radius: 4px;">
                        <p style="margin-bottom: 0;">Assinar plano</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(2)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
                    <div class="assinar-btn"
                        style="padding: 9px 16px; background: #F39200; color: white; font-weight: 700; border-radius: 4px;">
                        <p style="margin-bottom: 0;">Assinar plano</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(3)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
                    <div class="assinar-btn"
                        style="padding: 9px 16px; background: #F39200; color: white; font-weight: 700; border-radius: 4px;">
                        <p style="margin-bottom: 0;">Assinar plano</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(4)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
                    <div class="assinar-btn"
                        style="padding: 9px 16px; background: #F39200; color: white; font-weight: 700; border-radius: 4px;">
                        <p style="margin-bottom: 0;">Assinar plano</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(5)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
            ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
                    <div class="assinar-btn"
                        style="padding: 9px 16px; background: #F39200; color: white; font-weight: 700; border-radius: 4px;">
                        <p style="margin-bottom: 0;">Assinar plano</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</div>`

const templatePlanosSemBotao = ` <div id="planos-proposta"
style="margin-top: 25px; background-color: white; padding: 30px; width: 100%;">
<div id="topdiv"
    style="border-bottom: 1px dashed grey; padding-bottom: 15px; display: flex; justify-content: space-between;">
    <div id="plantopdiv"
        style="display: flex; align-items: center; gap: 10px; width: fit-content;">
        <img src="./assets/File Alt.png" alt="file">
        <p style="color:#005CA9; margin-bottom: 0;">Planos</p>
    </div>
    <img onclick="deleteScreenElement()" style="height: 10px; width: 10px;"
        src="./assets/Times.png" alt="x icon">
</div>
<div class="owl-carousel owl-theme" style="width: 100%; margin: auto;">
    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(0)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
                   
                </div>
            </div>
        </div>
    </div>

    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(1)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
                 
                </div>
            </div>
        </div>
    </div>

    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(2)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
              
                </div>
            </div>
        </div>
    </div>

    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(3)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
               
                </div>
            </div>
        </div>
    </div>

    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(4)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
                  
                </div>
            </div>
        </div>
    </div>

    <div class="plano-card"
        style="padding: 15px; border: 1.06px solid #CBCBCB; border-radius: 6.38px; box-shadow: 0px 4.251572132110596px 4.251572132110596px 0px #00000040;                            ">
        <h2>NOME DO PLANO</h2>
        <p>Com 2 mensalidades grátis</p>
        <ul style="list-style-position: inside;">
            <li>Pedágios</li>
            <li>Postos</li>
            <li>Estacionamento</li>
            <li>Lava-rápido</li>
            <li>Drive-thrus</li>
        </ul>
        <div style="display: flex; flex-direction: column;">
            <div onclick="showPlanText(5)"
                style="display: flex; align-items: center; gap: 10px; align-self: flex-end;">
                <p
                    style="color: #0F92FF; text-decoration: underline; font-weight: 700; margin-bottom: 0;">
                    Ver detalhes do plano</p>
                <img style="width: 15px; height: 10px;" src="./assets/Chevron Down.png"
                    alt="seta para baixo">
            </div>
            <div class="planText" style="display: none;">
                <p>
                    Taxa:
                    <br>
                    Adesão: R$20,00
                    <br>
                    Esse valor será revertido em crédito após 24 horas
                    da compra da 1ª recarga.
                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                    sem uso.

                </p>
            </div>
            <hr>
            <div style="display: flex;">
                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
            ">
                    <p>R$ <span style="font-size: 25px;">32,90</span></p>
                    <p>/ por mês</p>
                </div>
                <div
                    style="width: 50%; display: flex; align-items: center; justify-content: center;">
                  
                </div>
            </div>
        </div>
    </div>

</div>
</div>`


const templateConsulta = `<div id="cadastrar-proposta1" style="border-radius: 10px;">
<div id="cadastrar-proposta1-top">
    <img style="width: 20px; height:15px; margin-right: 5px;" src="./assets/Icon.png"
        alt="view icon">
    <p style="margin: 0;"  onclick="insertPlansForViewPorpouse()">Visualizar Planos</p>
</div>
<p style="padding-left: 25px; font-weight: 600;  color: #426BA3; font-size: 19px;">Digite CNPJ e
    prossiga para consultar ou cadastrar uma proposta.</p>
<form action="get">
    <label style="margin-left: 25px;" for="CNPJ-CPF"> CNPJ <span style="color: red;"> *
        </span></label>
    <div
        style="display: flex; flex-direction: row; justify-content: space-between; width: 75%; margin-left: 25px; padding-bottom: 15px;">
        <input id="input-cnpj-cpf" oninput="changeSubmitBtnColor()" name="CNPJ-CPF" type="text"
            placeholder="digite seu CNPJ / CPF"
            style="border: 1px solid #c2c5c5; border-radius: 5px; padding: 5px 15px; width: 50%;">
        <input id="submit-btn" onclick="event.preventDefault(), verifyCpfAndChangeScreenElements('#input-cnpj-cpf')"
            type="submit" value="Avançar"
            style="padding: 7px 20px; background: #AFCACF; border: none; color: white; border-radius: 5px;">
    </div>
</form>
</div>
<div id="planos" style="width: 80vw;">
<!-- isso aqui sera template -->

</div>`






// Variables
const arrowCont = document.querySelector("#open-arrow");
let verticalNav = document.querySelectorAll(".closed");
let verticalNavStatus = true;
const openedContainer = document.querySelector("#opened-container");
const parentTags = document.querySelectorAll(".parent-tag");
const parentTagsTxt = document.querySelectorAll(".parent-tag-txt");
let childOpen = true;
let childOpen2 = true;
const dropDown = document.querySelectorAll(".dropdown");
const dropDown2 = document.querySelector("#dropdown2");
const macroTag = document.querySelector("#macro-tag");
const microTag = document.querySelector("#micro-tag");
let subitens = document.querySelectorAll(".mini-tag p");
let subitensTag = document.querySelectorAll(".mini-tag");
const rigNavDiv = document.querySelector("#right-nav-div");
const popContainer = document.querySelector("#user-popup-container");


// Functions
// Open Lateral Menu
arrowCont.addEventListener("click", () => {
    if (verticalNavStatus == true) {
        verticalNav[0].className = "open";
        arrowCont.src = "./assets/left-arrow.png"
        openedContainer.style.opacity = "1";
        verticalNavStatus = false;
        document.querySelectorAll('.arrow-container')[0].style = "border-bottom: 2px solid blue";
        document.querySelector('#campo-gestor').style = "display: block"
    }
    // Close Lateral Menu
    else {
        verticalNav[0].className = "closed";
        openedContainer.style.opacity = "0";
        arrowCont.src = "./assets/keyboard_double_arrow_right_black_24dp.svg    "
        verticalNavStatus = true;
        document.querySelectorAll('.arrow-container')[0].style = "";
        document.querySelector('#campo-gestor').style = "display: none"
    }
})


// Open Parent tag subitems
let dropDownOpened = {
    gestaovendas: false,
    parametrizacao: false,
    propostas: false
};

function openAndCloseDropDownMenu(dropDownName) {
    let index = Object.keys(dropDownOpened).indexOf(dropDownName);
    let arrowIndex = index;
    arrowIndex += 1;

    let arrow = document.querySelector("#parent-arrow" + (arrowIndex));
    if (dropDownOpened[dropDownName] == false) {
        dropDown[index].classList.remove("child-closed");
        dropDown[index].classList.add("child-open")
        arrow.src = "./assets/round_keyboard_arrow_up_black_24dp.png"
        dropDownOpened[dropDownName] = true;
    } else {
        dropDown[index].classList.remove("child-open")
        dropDown[index].classList.add("child-closed");
        arrow.src = "./assets/round_keyboard_arrow_down_black_24dp.png"
        dropDownOpened[dropDownName] = false;
    }
}

// Função que muda o nome conforme os botões
function changeMacroTag(index, subItemText) {
    macroTag.innerHTML = parentTagsTxt[index].innerHTML;
    document.querySelector('#big-txt').innerHTML = parentTagsTxt[index].innerHTML;
    microTag.innerHTML = `/ ${subItemText}`;
}


function disableMenuClass() {
    active = document.getElementsByClassName('active-tag');
    for (element of active) {
        element.classList.remove('active-tag')

    }
}

function activeMenuClass(id, indexChangeMacroTag) {
    disableMenuClass();
    element = document.getElementById(id);
    element.className = element.className + " active-tag ";
    changeMacroTag(indexChangeMacroTag, element.innerText);
}


// função para mostrar popup
function mostrarPopup() {
    popContainer.className = "popup-on";
    setTimeout(popupDisplay, 1000);
}

// função para esconder popup
function esconderPopup() {
    popContainer.className = "popup-off";
    setTimeout(popupHide, 1000);
}

// função show popupdisplay
function popupDisplay() {
    if (popContainer.style.display = "none" || "") {
        popContainer.style.display = "block";
    } else {

    }
}

function popupHide() {
    if (popContainer.style.display = "block") {
        popContainer.style.display = "none";
    } else {

    }
}


rigNavDiv.onmouseover = mostrarPopup;
rigNavDiv.onmouseleave = esconderPopup;
popContainer.onmouseover = mostrarPopup;
popContainer.onmouseleave = esconderPopup;

function changeSubmitBtnColor() {
    if (document.querySelector('#input-cnpj-cpf').value == "") {
        document.querySelector('#submit-btn').style = "padding: 7px 20px; border: none; color: white; border-radius: 5px; background-color: #AFCACF;"
    } else {
        document.querySelector('#submit-btn').style = "padding: 7px 20px; border: none; color: white; border-radius: 5px; background-color: #F39200;"

    }
}

document.getElementById("submit-btn").addEventListener("click", function (event) {
    event.preventDefault()
});


//   NAO TERMINEI AINDA A FUNCAO
function insertPlansForViewPorpouse() {
    document.querySelector('#planos').innerHTML = templatePlanosSemBotao


    $('.owl-carousel').owlCarousel({
        lazyLoad: true,
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
}

function verifyCpfAndChangeScreenElements(nome) {
    if (document.querySelector(nome).value == localStorage.getItem('cpf')) {
        let cpf = document.querySelector('#input-cnpj-cpf').value
        localStorage.setItem('cpf', cpf) 
        document.querySelector('#planos').innerHTML = templatePlanos


        $('.owl-carousel').owlCarousel({
            lazyLoad: true,
            loop: false,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })

    } else {
        return
    }
}

function showPlanText(number) {
    if (document.querySelectorAll('.planText')[number].style.display == "none") {
        document.querySelectorAll('.planText')[number].style.display = "block"
    } else {
        document.querySelectorAll('.planText')[number].style.display = "none"
    }
}

function insertContent(tagReceber) {
    document.querySelector('#pages').innerHTML = tagReceber;
}

function setCadastroFormCPF () {
    let cpfNum = localStorage.getItem('cpf')
        document.querySelector('#cpf-campo').innerText = cpfNum
}

