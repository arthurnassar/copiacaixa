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

const templateCadastroInputs = ` 

<div id="insert-data-for-register"
style="background-color: white; padding: 45px 71px 45px 90px; display: flex; flex-direction: column;">
<div class="d-flex justify-content-between">
    <div class="d-flex flex-row position-relative" style="width: fit-content;">
        <h2 class="mr-4" style="font-size: 15px; font-weight: 700; color: #005CA9;">NSU: 123456789
        </h2>
        <a style="text-decoration: none; position: absolute; top: 0; right: 0; background-color: blue; border-radius: 50%; padding: 2.5px 7px; font-size: 10px; color: white;"
            href="#" data-toggle="tooltip" data-placement="right"
            title="EXPLICACAO SOBRE O NSU">?</a>
    </div>
    <div class="d-flex flex-row" style="gap: 10px">
        <p>Dados desse CPF/CNPJ</p>
        <p id="cpf-campo" onload="setCadastroFormCPF()"
            style="background-color: #EFF4F5; color: #005CA9; padding: 5px 10px; min-width: 180px; font-weight: 700;">
        </p>
    </div>
</div>

<div class="d-flex flex-row justify-content-between">
    <div class="d-flex align-items-center">
        <p>
            Produto: CAIXA FROTA
        </p>
    </div>
    <div>
        <p>Status da proposta</p>
        <p id="status-proposta" class="btn"
            style="background-color: #54BBAB; color: white; font-weight: 600;"> CADASTRANDO </p>
    </div>
</div>

<form action="" class="d-flex flex-column gap-5">

    <div id="dados-da-empresa-inputs" class="d-flex flex-column gap-3">

        <div class="d-flex align-items-center" style="gap: 10px">
            <div style="width: 3px; height: 32px; background-color: #3d95c1;"
                class="align-items-center"></div>
            <h2 style="margin-bottom: 0;">Dados da Empresa</h2>
        </div>

        <hr style="color:#3d95c1">

        <div class="d-flex flex-row gap-5">

            <div class="d-flex flex-column gap-4 w-50 ">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="nomeEmpresa">Nome da Empresa / Razão Social <span
                            style="color: red">*</span></label>
                    <input class="inputModel" type="text" name="nomeEmpresa"
                        placeholder="Digite o nome / razão social">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="representante">Representante / Contato empresa <span
                            style="color: red">*</span></label>
                    <input class="inputModel" type="text" name="representante"
                        placeholder="Digite o nome do representante">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="representanteTel">Telefone do representante <span
                            style="color: red">*</span></label>
                    <input class="inputModel" type="tel" name="representanteTel"
                        placeholder="Digite o nome / razão social">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="representanteCargo"> <strong>Cargo do representante </strong> <span
                            style="color: red">*</span></label>
                    <input class="inputModel" type="text" name="representanteCargo"
                        placeholder="Digite o cargo do representante">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="nomeSocios">Nome dos Sócios <span
                            style="color: red">*</span></label>
                    <input class="inputModel" type="text" name="nomeSocios"
                        placeholder="Digite o nome dos sócios">

                </div>
            </div>

            <div class="d-flex flex-column gap-4 w-50">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="nomeFantasia">Nome fantasia</label>
                    <input class="inputModel" type="text" name="nomeFantasia"
                        placeholder="Digite o nome / razão social">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="representanteCpf"> CPF do representante <span
                            style="color: red">*</span></label>
                    <input class="inputModel" type="text" name="representanteCpf"
                        placeholder="Digite o CPF do representante">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="representanteEmail">Email do representante <span
                            style="color: red">*</span></label>
                    <input class="inputModel" type="email" name="representanteEmail"
                        placeholder="Digite o nome email do representante">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="faturamento">Faturamento Mensal <span
                            style="color: red">*</span></label>
                    <input class="inputModel" type="text" name="faturamento"
                        placeholder="Digite o valor do faturamento mensal">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="cpfSocios">CPF dos Sócios <span style="color: red">*</span></label>
                    <input class="inputModel" type="text" name="cpfSocios"
                        placeholder="Digite o CPF dos sócios">

                </div>
            </div>

        </div>
    </div>

    <d1iv id="endereco-inputs" class="d-flex flex-column gap-3">

        <div class="d-flex align-items-center" style="gap: 10px">
            <div style="width: 3px; height: 32px; background-color: #3d95c1;"
                class="align-items-center"></div>
            <h2 style="margin-bottom: 0;">Endereço</h2>
        </div>

        <hr style="color:#3d95c1">

        <div class="d-flex flex-row gap-5">

            <div class="d-flex flex-column gap-4 w-50 ">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="cep">CEP <span style="color: red">*</span></label>
                    <input id="cep" class="inputModel" type="text" name="cep"
                        placeholder="Digite o CEP">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="numero">Número <span style="color: red">*</span></label>
                    <input class="inputModel" type="number" name="numero"
                        placeholder="Digite o número">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="uf">Estado <span style="color: red">*</span></label>
                    <input id="estado" readonly disabled class="inputModel" type="text" name="uf"
                        placeholder="Digite o Estado">

                </div>

            </div>

            <div class="d-flex flex-column gap-4 w-50">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="logradouro">Logradouro <span style="color: red">*</span></label>
                    <input class="inputModel" type="text" name="logradouro"
                        placeholder="Digite o logradouro">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="cidade">Cidade <span style="color: red">*</span></label>
                    <input class="inputModel" id="cidade" type="text" name="cidade"
                        placeholder="Digite o nome da cidade">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="bairro">Bairro <span style="color: red">*</span></label>
                    <input class="inputModel" type="email" name="bairro"
                        placeholder="Digite o bairro">

                </div>

            </div>

        </div>

        <div class="inputContainerModel w-100 d-flex flex-column">

            <label for="complemento">Complemento <span style="color: red">*</span></label>
            <input class="inputModel p-3" type="email" name="complemento"
                placeholder="Digite o complemento">

        </div>

    </d1iv>

    <div id="informacoes-inputs" class="d-flex flex-column gap-3">

        <div class="d-flex align-items-center" style="gap: 10px">
            <div style="width: 3px; height: 32px; background-color: #3d95c1;"
                class="align-items-center"></div>
            <h2 style="margin-bottom: 0;">Informações do Produto</h2>
        </div>

        <hr style="color:#3d95c1">

        <div class="d-flex flex-row gap-5">

            <div class="d-flex flex-column gap-4 w-50 ">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="plano">Plano Selecionado <span style="color: red">*</span></label>
                    <select id="plano" class="inputModel" type="text" name="plano">
                        <option value="plano1">PLANO 1</option>
                        <option value="plano2">PLANO 2</option>
                        <option value="plano3">PLANO 3</option>
                        <option value="plano4">PLANO 4</option>
                    </select>

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="cargaCartao">Carga média por cartão <span
                            style="color: red">*</span></label>
                    <input class="inputModel" type="number" name="cargaCartao"
                        placeholder="Digite o valor">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">
                    <label for="pagamentoForma">Forma de pagamento <span
                            style="color: red">*</span></label>
                    <select id="pagamentoForma" class="inputModel" type="text"
                        name="pagamentoForma">
                        <option value="credito">Crédito</option>
                        <option value="pix">PIX</option>
                        <option value="debito">Débito</option>
                        <option value="dinheiro">Dinheiro</option>
                    </select>


                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">
                    <label for="pagamentoData">Data de pagamento <span
                            style="color: red">*</span></label>
                    <select type="text" id="pagamentoData" class="inputModel" name="pagamentoData">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>


                </div>

            </div>

            <div class="d-flex flex-column gap-4 w-50 ">

                <div class="w-100 position-relative"
                    style="padding-left: 0; top: 16px; margin-bottom: 8px;" type="button"
                    id="cadastrar-proposta1-top" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    <img style="width: 20px; height:15px; margin-right: 5px;"
                        src="./assets/Icon.png" alt="view icon">
                    <p style="margin: 0;">Visualizar Planos
                    </p>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Planos</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="owl-carousel owl-theme"
                                    style="width: 100%; margin: auto;">
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
                                                <img style="width: 15px; height: 10px;"
                                                    src="./assets/Chevron Down.png"
                                                    alt="seta para baixo">
                                            </div>
                                            <div class="planText" style="display: none;">
                                                <p>
                                                    Taxa:
                                                    <br>
                                                    Adesão: R$20,00
                                                    <br>
                                                    Esse valor será revertido em crédito após 24
                                                    horas
                                                    da compra da 1ª recarga.
                                                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                                                    sem uso.

                                                </p>
                                            </div>
                                            <hr>
                                            <div style="display: flex;">
                                                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                                                ">
                                                    <p>R$ <span
                                                            style="font-size: 25px;">32,90</span>
                                                    </p>
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
                                                <img style="width: 15px; height: 10px;"
                                                    src="./assets/Chevron Down.png"
                                                    alt="seta para baixo">
                                            </div>
                                            <div class="planText" style="display: none;">
                                                <p>
                                                    Taxa:
                                                    <br>
                                                    Adesão: R$20,00
                                                    <br>
                                                    Esse valor será revertido em crédito após 24
                                                    horas
                                                    da compra da 1ª recarga.
                                                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                                                    sem uso.

                                                </p>
                                            </div>
                                            <hr>
                                            <div style="display: flex;">
                                                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                                                ">
                                                    <p>R$ <span
                                                            style="font-size: 25px;">32,90</span>
                                                    </p>
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
                                                <img style="width: 15px; height: 10px;"
                                                    src="./assets/Chevron Down.png"
                                                    alt="seta para baixo">
                                            </div>
                                            <div class="planText" style="display: none;">
                                                <p>
                                                    Taxa:
                                                    <br>
                                                    Adesão: R$20,00
                                                    <br>
                                                    Esse valor será revertido em crédito após 24
                                                    horas
                                                    da compra da 1ª recarga.
                                                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                                                    sem uso.

                                                </p>
                                            </div>
                                            <hr>
                                            <div style="display: flex;">
                                                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                                                ">
                                                    <p>R$ <span
                                                            style="font-size: 25px;">32,90</span>
                                                    </p>
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
                                                <img style="width: 15px; height: 10px;"
                                                    src="./assets/Chevron Down.png"
                                                    alt="seta para baixo">
                                            </div>
                                            <div class="planText" style="display: none;">
                                                <p>
                                                    Taxa:
                                                    <br>
                                                    Adesão: R$20,00
                                                    <br>
                                                    Esse valor será revertido em crédito após 24
                                                    horas
                                                    da compra da 1ª recarga.
                                                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                                                    sem uso.

                                                </p>
                                            </div>
                                            <hr>
                                            <div style="display: flex;">
                                                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                                                ">
                                                    <p>R$ <span
                                                            style="font-size: 25px;">32,90</span>
                                                    </p>
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
                                                <img style="width: 15px; height: 10px;"
                                                    src="./assets/Chevron Down.png"
                                                    alt="seta para baixo">
                                            </div>
                                            <div class="planText" style="display: none;">
                                                <p>
                                                    Taxa:
                                                    <br>
                                                    Adesão: R$20,00
                                                    <br>
                                                    Esse valor será revertido em crédito após 24
                                                    horas
                                                    da compra da 1ª recarga.
                                                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                                                    sem uso.

                                                </p>
                                            </div>
                                            <hr>
                                            <div style="display: flex;">
                                                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                                                ">
                                                    <p>R$ <span
                                                            style="font-size: 25px;">32,90</span>
                                                    </p>
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
                                                <img style="width: 15px; height: 10px;"
                                                    src="./assets/Chevron Down.png"
                                                    alt="seta para baixo">
                                            </div>
                                            <div class="planText" style="display: none;">
                                                <p>
                                                    Taxa:
                                                    <br>
                                                    Adesão: R$20,00
                                                    <br>
                                                    Esse valor será revertido em crédito após 24
                                                    horas
                                                    da compra da 1ª recarga.
                                                    Tarifa de manutenção: R$ 3,00/ mês após 90 dias
                                                    sem uso.

                                                </p>
                                            </div>
                                            <hr>
                                            <div style="display: flex;">
                                                <div style="width: 50%; display: flex; flex-direction: column; font-weight: 700; color: #3A4859;
                                            ">
                                                    <p>R$ <span
                                                            style="font-size: 25px;">32,90</span>
                                                    </p>
                                                    <p>/ por mês</p>
                                                </div>
                                                <div
                                                    style="width: 50%; display: flex; align-items: center; justify-content: center;">

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="quantidadeCartão">Quantidade de cartões <span
                            style="color: red">*</span></label>
                    <input class="inputModel" id="quantidadeCartão" type="text"
                        name="quantidadeCartão" placeholder="Digite a quantidade de cartões">

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="numeroConta">Conta <span style="color: red">*</span></label>
                    <input class="inputModel" type="email" name="numeroConta"
                        placeholder="Digite o número da conta ag / cc">

                </div>


                <div class="inputContainerModel w-100 d-flex flex-column">

                    <label for="valorAprovado">Valor Aprovado <span
                            style="color: red">*</span></label>
                    <input class="inputModel" type="email" name="valorAprovado"
                        placeholder="Valor que foi aprovado">

                </div>

            </div>

        </div>


    </div>

    <div id="informacoes-vendedor-inputs" class="d-flex flex-column gap-3">

        <div class="d-flex align-items-center" style="gap: 10px">
            <div style="width: 3px; height: 32px; background-color: #3d95c1;"
                class="align-items-center"></div>
            <h2 style="margin-bottom: 0;">Informações do Vendedor</h2>
        </div>

        <hr style="color:#3d95c1">

        <div class="d-flex flex-row gap-5">

            <div class="d-flex flex-column gap-4 w-50 ">

                <p> Vendedor: Eduardo Gomes</p>
                <p>Agência: Planalto / 001</p>

                <div id="salvar-enviar-btn-container"
                    class="d-flex gap-4" style="width: fit-content;">
                    <a onclick="trocarStatusDaProposta()" href="#" class="btn text-white fs-5"
                     style="font-weight: 800; background: #3E9D8E; padding: 10px 40px 10px 40px;">
                        Salvar </a>
                    <a onclick="saveInputValueAndShowOnScreen()" href="#" class="btn fs-5 text-white"
                        style="background: #F39200; font-weight: 800; padding: 10px 40px 10px 40px;">
                        Imprimir e Enviar</a>
                </div>

            </div>

        </div>

    </div>
</form>


</div>`

const documentoFinal = ` <div id="insert-data-for-register"
style="background-color: white; padding: 45px 71px 45px 90px; display: flex; flex-direction: column;">
<div class="d-flex justify-content-between">
    <div class="d-flex flex-row position-relative" style="width: fit-content;">
        <h2 class="mr-4" style="font-size: 15px; font-weight: 700; color: #005CA9;">NSU: 123456789
        </h2>
        <a style="text-decoration: none; position: absolute; top: 0; right: 0; background-color: blue; border-radius: 50%; padding: 2.5px 7px; font-size: 10px; color: white;"
            href="#" data-toggle="tooltip" data-placement="right"
            title="EXPLICACAO SOBRE O NSU">?</a>
    </div>
    <div class="d-flex flex-row" style="gap: 10px">
        <p>Dados desse CPF/CNPJ</p>
        <p id="cpf-campo" onload="setCadastroFormCPF()"
            style="background-color: #EFF4F5; color: #005CA9; padding: 5px 10px; min-width: 180px; font-weight: 700;">
        </p>
    </div>
</div>

<div class="d-flex flex-row justify-content-between">
    <div class="d-flex align-items-center">
        <p>
            Produto: CAIXA FROTA
        </p>
    </div>
    <div>
        <p>Status da proposta</p>
        <p id="status-proposta" class="btn"
            style="background-color: #54BBAB; color: white; font-weight: 600;"> ENVIADO </p>
    </div>
</div>

<form action="" class="d-flex flex-column gap-5">

    <div id="dados-da-empresa-campos" class="d-flex flex-column gap-3">

        <div class="d-flex align-items-center" style="gap: 10px">
            <div style="width: 3px; height: 32px; background-color: #3d95c1;"
                class="align-items-center"></div>
            <h2 style="margin-bottom: 0;">Dados da Empresa</h2>
        </div>

        <hr style="color:#3d95c1">

        <div class="d-flex flex-row gap-5">

            <div class="d-flex flex-column gap-4 w-50 ">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> CPF / CNPJ </span>
                    <p>000.000.000-00</p>

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Nome dos sócios </span>
                    <p>xxxxxxxxxxxxx</p>
                </div>

            </div>

            <div class="d-flex flex-column gap-4 w-50">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Nome Empresa / Razão Social </span>
                   <p>Alguma Empresa</p>

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Telefone do representante </span>
                    <p>Alguma Cidade</p>

                </div>

               
            </div>

            <div class="d-flex flex-column gap-4 w-50">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Representante / Contato empresa </span>
                    <p>Alguma Empresa</p>

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Email do representante </span>
                    <span> Rua, quadra, lote, bairro</span>

                </div>

               
            </div>

        </div>
    </div>

    <div id="endereco-campos" class="d-flex flex-column gap-3">

        <div class="d-flex align-items-center" style="gap: 10px">
            <div style="width: 3px; height: 32px; background-color: #3d95c1;"
                class="align-items-center"></div>
            <h2 style="margin-bottom: 0;">Endereço</h2>
        </div>

        <hr style="color:#3d95c1">

        <div class="d-flex flex-row gap-5">

            <div class="d-flex flex-column gap-4 w-50 ">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> CEP </span>
                    <p>00.000-000</p>

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> UF </span>
                    <p>Algum estado</p>

                </div>

               
            </div>

            <div class="d-flex flex-column gap-4 w-50">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Logradouro </span>
                    <p>Rua, Lote, Quadra, etc</p>

                </div>

                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Cidade </span>
                    <p>Alguma cidade</p>

                </div>
            </div>

            <div class="d-flex flex-column gap-4 w-50">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Bairro </span>
                    <p>Algum bairro</p>

                </div>
            </div>

        
        </div>

        


    </div>


    <div id="informacoes-campos" class="d-flex flex-column gap-3">

        <div class="d-flex align-items-center" style="gap: 10px">
            <div style="width: 3px; height: 32px; background-color: #3d95c1;"
                class="align-items-center"></div>
            <h2 style="margin-bottom: 0;">Informações do Produto</h2>
        </div>

        <hr style="color:#3d95c1">

        <div class="d-flex flex-row gap-5">

            <div class="d-flex flex-column gap-4 w-50 ">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Carga média por cartão </span>
                    <p>00000</p>

                </div>


               
            </div>

            <div class="d-flex flex-column gap-4 w-50">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Quantidade tag / cartões </span>
                    <p>00000</p>

                </div>

              
            </div>

            <div class="d-flex flex-column gap-4 w-50">
                <div class="inputContainerModel w-100 d-flex flex-column">

                 

                </div>
            </div>

        
        </div>


    </div>

    <div id="informacoes-vendedor-inputs" class="d-flex flex-column gap-3">

        <div class="d-flex align-items-center" style="gap: 10px">
            <div style="width: 3px; height: 32px; background-color: #3d95c1;"
                class="align-items-center"></div>
            <h2 style="margin-bottom: 0;">Informações do Vendedor</h2>
        </div>

        <hr style="color:#3d95c1">

        <div class="d-flex flex-row gap-5">

            <div class="d-flex flex-column gap-4 w-50 ">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Nome Vendedor </span>
                    <p>Eduardo</p>
                </div>


               
            </div>

            <div class="d-flex flex-column gap-4 w-50">
                <div class="inputContainerModel w-100 d-flex flex-column">

                    <span> Agência </span>
                    <p> 00000 </p>

                </div>

              
            </div>

            <div class="d-flex flex-column gap-4 w-50">
                <div class="inputContainerModel w-100 d-flex flex-column">

                 

                </div>
            </div>

        
        </div>

    </div>
</form>


</div>`

const filtrarPropostas = `
 <div id="filtrarConteudoPage">
                    <div class="d-flex justify-content-between">
                        <h4 style="color: #005CA9; font-weight: 900;">
                            Resultados
                        </h4>

                        <div class="pr-1">
                            <img src="./assets/reload.png" alt="recarregar">
                            <img src="./assets/download.png" alt="baixar">

                        </div>
                    </div>

                    <hr>

                    <p class="text-muted">
                        Filtros usados na busca: Nome Fantasia / CNPJ / Produto / Status / Unidade / Código da Unidade
                    </p>

                    <div id="filtro-propostas-container" class="p-4">
                        <table class="w-100">
                            <tr>
                                <th style="width: 13%;">CNPJ <img src="./assets/unfold-more-horizontal.png"
                                        alt="setas para cima e para baixo" style="width: 14px; height: 14px;"></th>
                                <th style="width: 13%;">Razão Social <img src="./assets/unfold-more-horizontal.png"
                                        alt="setas para cima e para baixo" style="width: 14px; height: 14px;"></th>
                                <th style="width: 13%;">Status <img src="./assets/unfold-more-horizontal.png"
                                        alt="setas para cima e para baixo" style="width: 14px; height: 14px;"></th>
                                <th style="width: 13%;">Enviada em <img src="./assets/unfold-more-horizontal.png"
                                        alt="setas para cima e para baixo" style="width: 14px; height: 14px;"></th>
                                <th style="width: 13%;">Atualizada em <img src="./assets/unfold-more-horizontal.png"
                                        alt="setas para cima e para baixo" style="width: 14px; height: 14px;"></th>
                                <th style="width: 13%;">Faturamento mensal est. <img
                                        src="./assets/unfold-more-horizontal.png" alt="setas para cima e para baixo"
                                        style="width: 14px; height: 14px;"></th>
                                <th style="width: 13%;">Valor aprovado <img src="./assets/unfold-more-horizontal.png"
                                        alt="setas para cima e para baixo" style="width: 14px; height: 14px;"></th>
                                <th style="width: 9%;">Ação <img src="./assets/unfold-more-horizontal.png"
                                        alt="setas para cima e para baixo" style="width: 14px; height: 14px;"></th>
                            </tr>
                            <tr>
                                <td>XX.XXX.XXX/0001-XX</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td><img src="./assets/view-list.png" alt="ações"> <img src="./assets/chevron-down.png"
                                        alt="seta para baixo"></td>
                            </tr>
                            <tr class="bg-light">
                                <td>XX.XXX.XXX/0001-XX</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td><img src="./assets/view-list.png" alt="ações"> <img src="./assets/chevron-down.png"
                                        alt="seta para baixo"></td>
                            </tr>
                            <tr>
                                <td>XX.XXX.XXX/0001-XX</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td><img src="./assets/view-list.png" alt="ações"> <img src="./assets/chevron-down.png"
                                        alt="seta para baixo"></td>
                            </tr>
                            <tr class="bg-light">
                                <td>XX.XXX.XXX/0001-XX</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td><img src="./assets/view-list.png" alt="ações"> <img src="./assets/chevron-down.png"
                                        alt="seta para baixo"></td>
                            </tr>
                            <tr>
                                <td>XX.XXX.XXX/0001-XX</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td><img src="./assets/view-list.png" alt="ações"> <img src="./assets/chevron-down.png"
                                        alt="seta para baixo"></td>
                            </tr>
                            <tr class="bg-light">
                                <td>XX.XXX.XXX/0001-XX</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td><img src="./assets/view-list.png" alt="ações"> <img src="./assets/chevron-down.png"
                                        alt="seta para baixo"></td>
                            </tr>
                            <tr>
                                <td>XX.XXX.XXX/0001-XX</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td><img src="./assets/view-list.png" alt="ações"> <img src="./assets/chevron-down.png"
                                        alt="seta para baixo"></td>
                            </tr>
                            <tr class="bg-light">
                                <td>XX.XXX.XXX/0001-XX</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td><img src="./assets/view-list.png" alt="ações"> <img src="./assets/chevron-down.png"
                                        alt="seta para baixo"></td>
                            </tr>
                            <tr>
                                <td>XX.XXX.XXX/0001-XX</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td><img src="./assets/view-list.png" alt="ações"> <img src="./assets/chevron-down.png"
                                        alt="seta para baixo"></td>
                            </tr>
                            <tr class="bg-light">
                                <td>XX.XXX.XXX/0001-XX</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td>Item de tabela</td>
                                <td><img src="./assets/view-list.png" alt="ações"> <img src="./assets/chevron-down.png"
                                        alt="seta para baixo"></td>
                            </tr>

                        </table>
                    </div>

                    <div class="d-flex align-items-center gap-5 py-2 justify-content-end">
                        <p>
                            150 resultados
                        </p>
                        <div class="d-flex gap-2">
                            <p>
                                Mostrar:
                            </p>

                            <select style="height: fit-content;" class="ml-5" name="mostrarQuant" id="mostratQuant">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>

                        </div>

                        <div class="d-flex gap-3">
                            <span>
                                < </span>

                                    <div id="table-pages" class="d-flex gap-3">
                                        <p>
                                            1
                                        </p>
                                        <p>
                                            2
                                        </p>

                                        <p>
                                            ...
                                        </p>

                                        <p>
                                            10
                                        </p>

                                        <p>
                                            15
                                        </p>


                                    </div>

                                    <span>
                                        >
                                    </span>
                        </div>

                        <div class="d-flex gap-2">
                            <p>
                                Ir para:
                            </p>

                            <input style="width: 20px; height: fit-content;" class="text-center" type="text" value="1">

                        </div>
                    </div>
                </div>
`




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

        activeMenuClass('tag8', 2)



        document.querySelector('#pages').innerHTML = templateCadastroInputs


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

function setCadastroFormCPF() {
    let cpfNum = localStorage.getItem('cpf')
    document.querySelector('#cpf-campo').innerText = cpfNum
}

function trocarStatusDaProposta() {
    document.querySelector('#status-proposta').innerHTML = 'SALVO'
}

function saveInputValueAndShowOnScreen() {
    document.querySelector('#pages').innerHTML = documentoFinal;
}