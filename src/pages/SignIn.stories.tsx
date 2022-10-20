import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

import { SignIn } from "./SignIn";

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(
                        ctx.json({
                            message: 'Login realizado!'
                        })
                    )
                }),
            ]
        },
        viewport: {
            // Maneira temporária para exibir corretamente no Preview do Storybook
            viewports: {
                ...{
                    default: {
                        name: 'Default',
                        styles: {
                          width: '650px',
                          height: '800px',
                        },
                      },
                },
                ...MINIMAL_VIEWPORTS,
            },
            defaultViewport: 'default',
        },
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'um_email_valido@email.teste.com');
        userEvent.type(canvas.getByPlaceholderText('Digite sua senha'), '12345678');

        // Como só tem um button na tela, pode ser utilizado dessa forma
        userEvent.click(canvas.getByRole('button'));

        await waitFor(() => {
            expect(canvas.getByText('Login Realizado com Sucesso!')).toBeInTheDocument();
        })
    }
}