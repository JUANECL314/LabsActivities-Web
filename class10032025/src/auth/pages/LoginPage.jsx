import React from 'react'

export const LoginPage = () => {
  return (
    <div>
        <form>
            <Grid>
                <Grid item  xs={12}  > 
                    <TextField label="Email" type="email" placeholder = "a0xxxxxx@gmail.com" fullwidth />

                </Grid>
                <Grid item  xs={12}  > 
                    <TextField label="Contraseña" type="passwprd" placeholder = "password" fullwidth />

                </Grid>
                <Grid item  xs={12}  > 

                </Grid>
            </Grid>


        </form>

    </div>
  )
}
